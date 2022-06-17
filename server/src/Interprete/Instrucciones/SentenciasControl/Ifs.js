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
var Return_1 = __importDefault(require("../SentenciasTransferencia/Return"));
var Ifs = /** @class */ (function () {
    /**
     *
     */
    function Ifs(condicion, lista_instrucciones_ifs, lista_instrucciones_elses, linea, columna) {
        this.condicion = condicion;
        this.lista_instrucciones_ifs = lista_instrucciones_ifs;
        this.lista_instrucciones_elses = lista_instrucciones_elses;
        this.columna = columna;
        this.linea = linea;
    }
    Ifs.prototype.ejecutar = function (controlador, ts) {
        /**
         * int x = 20;
         *  if(true){
         *     int a = 8;
         *      print(a);
         * }else{
         *       x = 30;
         * }
         * print(x); // 20
         */
        var ts_local = new TablaSimbolos_1.default(ts, ts.name);
        var valor_condicion = this.condicion.getValor(controlador, ts); //true | false
        if (this.condicion.getTipo(controlador, ts) == Tipo_1.tipo.BOOLEANO) {
            if (valor_condicion) {
                for (var _i = 0, _a = this.lista_instrucciones_ifs; _i < _a.length; _i++) {
                    var inst = _a[_i];
                    var ret = inst.ejecutar(controlador, ts_local);
                    if (ret instanceof Break_1.default) {
                        if (controlador.sent_ciclica) {
                            return ret;
                        }
                        else {
                            var error = new Errores_1.default("Semantico", "No se puede ejecutar la sentencia de transferencia Break dentro de la sentencia de control if.", this.linea, this.columna);
                            controlador.errores.push(error);
                            controlador.append(" *** ERROR: Semantico, No se puede ejecutar la sentencia de transferencia Break dentro de la sentencia de control if. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                        }
                    }
                    if (ret instanceof Continue_1.default) {
                        if (controlador.sent_ciclica) {
                            return ret;
                        }
                        else {
                            var error = new Errores_1.default("Semantico", "No se puede ejecutar la sentencia de transferencia Continue dentro de la sentencia de control if.", this.linea, this.columna);
                            controlador.errores.push(error);
                            controlador.append(" *** ERROR: Semantico, No se puede ejecutar la sentencia de transferencia Continue dentro de la sentencia de control if. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                        }
                    }
                    if (ret instanceof Return_1.default) {
                        return ret;
                    }
                    if (ret != null) {
                        return ret;
                    }
                }
            }
            else {
                /**
                 * if () {} else if(){} else { }
                 */
                for (var _b = 0, _c = this.lista_instrucciones_elses; _b < _c.length; _b++) {
                    var inst = _c[_b];
                    var ret = inst.ejecutar(controlador, ts_local);
                    if (ret instanceof Break_1.default) {
                        if (controlador.sent_ciclica) {
                            return ret;
                        }
                        else {
                            //error semantico, no se puede tener un break dentro de un else 
                        }
                    }
                    if (ret instanceof Return_1.default) {
                        return ret;
                    }
                    if (ret != null) {
                        return ret;
                    }
                }
            }
        }
        return null;
    };
    Ifs.prototype.recorrer = function () {
        var padre = new Nodo_1.default("Instruccion", "");
        var SI = new Nodo_1.default("IF", "");
        //console.log(this.condicion)
        var condicion = this.condicion.recorrer();
        padre.AddHijo(SI);
        padre.AddHijo(condicion);
        var intrucicones_if = new Nodo_1.default("Intrucciones", "");
        for (var _i = 0, _a = this.lista_instrucciones_ifs; _i < _a.length; _i++) {
            var ins = _a[_i];
            intrucicones_if.AddHijo(ins.recorrer());
        }
        padre.AddHijo(intrucicones_if);
        if (this.lista_instrucciones_elses != []) {
            var intrucicones_Else = new Nodo_1.default("Else", "");
            for (var _b = 0, _c = this.lista_instrucciones_elses; _b < _c.length; _b++) {
                var ins = _c[_b];
                intrucicones_Else.AddHijo(ins.recorrer());
            }
            padre.AddHijo(intrucicones_Else);
        }
        return padre;
    };
    return Ifs;
}());
exports.default = Ifs;
