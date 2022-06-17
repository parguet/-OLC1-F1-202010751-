"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Errores_1 = __importDefault(require("../../Ast/Errores"));
var Nodo_1 = __importDefault(require("../../Ast/Nodo"));
var TablaSimbolos_1 = __importDefault(require("../../TablaSimbolos/TablaSimbolos"));
var Tipo_1 = require("../../TablaSimbolos/Tipo");
var Break_1 = __importDefault(require("../SentenciasTransferencia/Break"));
var For = /** @class */ (function () {
    function For(dec_asig, condicion, actualizacion, lista_instrucciones, linea, columna) {
        this.dec_asig = dec_asig;
        this.condicion = condicion;
        this.actualizacion = actualizacion;
        this.lista_instrucciones = lista_instrucciones;
        this.linea = linea;
        this.columna = columna;
    }
    For.prototype.ejecutar = function (controlador, ts) {
        var ts_local = new TablaSimbolos_1.default(ts, ts.name);
        var temp = controlador.sent_ciclica;
        controlador.sent_ciclica = true;
        //console.log("estamos en el for")
        this.dec_asig.ejecutar(controlador, ts_local);
        //for(int i = 0; i < 10; i++){//int k; }
        if (this.condicion.getTipo(controlador, ts_local) == Tipo_1.tipo.BOOLEANO) {
            while (this.condicion.getValor(controlador, ts_local)) {
                var ts_local2 = new TablaSimbolos_1.default(ts_local, ts_local.name);
                for (var _i = 0, _a = this.lista_instrucciones; _i < _a.length; _i++) {
                    var inst = _a[_i];
                    var ret = inst.ejecutar(controlador, ts_local2);
                    if (ret instanceof Break_1.default) {
                        controlador.sent_ciclica = temp;
                        return ret;
                    }
                }
                this.actualizacion.ejecutar(controlador, ts_local);
            }
        }
        else {
            controlador.errores.push(new Errores_1.default("Semantico", "la condicion no es booleana", this.linea, this.columna));
            //reportamos error semantico de que la condicion no es booleana\
        }
        controlador.sent_ciclica = temp;
        return null;
    };
    For.prototype.recorrer = function () {
        var padre = new Nodo_1.default("Sentencia  For", "");
        padre.AddHijo(new Nodo_1.default("for", ""));
        padre.AddHijo(new Nodo_1.default("(", ""));
        padre.AddHijo(this.dec_asig.recorrer());
        padre.AddHijo(this.condicion.recorrer());
        padre.AddHijo(this.actualizacion.recorrer());
        padre.AddHijo(new Nodo_1.default(")", ""));
        var hijo_instrucciones = new Nodo_1.default("Instrucciones", "");
        for (var _i = 0, _a = this.lista_instrucciones; _i < _a.length; _i++) {
            var inst = _a[_i];
            hijo_instrucciones.AddHijo(inst.recorrer());
        }
        padre.AddHijo(hijo_instrucciones);
        return padre;
    };
    return For;
}());
exports.default = For;
