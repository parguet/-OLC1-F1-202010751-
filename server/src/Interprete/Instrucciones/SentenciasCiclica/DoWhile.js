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
var Continue_1 = __importDefault(require("../SentenciasTransferencia/Continue"));
var While = /** @class */ (function () {
    function While(condicion, lista_instrucciones, linea, columna) {
        this.condicion = condicion;
        this.lista_instrucciones = lista_instrucciones;
        this.linea = linea;
        this.columna = columna;
    }
    While.prototype.ejecutar = function (controlador, ts) {
        var temp = controlador.sent_ciclica;
        controlador.sent_ciclica = true;
        if (this.condicion.getTipo(controlador, ts) == Tipo_1.tipo.BOOLEANO) {
            siguiente: do {
                var ts_local = new TablaSimbolos_1.default(ts, ts.name);
                for (var _i = 0, _a = this.lista_instrucciones; _i < _a.length; _i++) {
                    var inst = _a[_i];
                    var ret = inst.ejecutar(controlador, ts_local);
                    if (ret instanceof Break_1.default) {
                        console.log("ME SALI POR ERROR");
                        controlador.sent_ciclica = temp;
                        return ret;
                    }
                    if (ret instanceof Continue_1.default) {
                        continue siguiente;
                    }
                }
            } while (this.condicion.getValor(controlador, ts));
        }
        else {
            controlador.errores.push(new Errores_1.default("Semantico", "condicion no es booleana", this.linea, this.columna));
            //reportamos error semantico de que la condicion no es booleana\
        }
        controlador.sent_ciclica = temp;
        return null;
    };
    While.prototype.recorrer = function () {
        var padre = new Nodo_1.default("Sentencia Do While", "");
        padre.AddHijo(new Nodo_1.default("Do", ""));
        var hijo_instrucciones = new Nodo_1.default("Instrucciones", "");
        for (var _i = 0, _a = this.lista_instrucciones; _i < _a.length; _i++) {
            var inst = _a[_i];
            hijo_instrucciones.AddHijo(inst.recorrer());
        }
        padre.AddHijo(hijo_instrucciones);
        var condicion_while = new Nodo_1.default("Condicion", "");
        padre.AddHijo(new Nodo_1.default("(", ""));
        condicion_while.AddHijo(this.condicion.recorrer());
        padre.AddHijo(condicion_while);
        padre.AddHijo(new Nodo_1.default(")", ""));
        return padre;
    };
    return While;
}());
exports.default = While;
