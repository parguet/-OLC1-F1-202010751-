"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Nodo_1 = __importDefault(require("../../Ast/Nodo"));
var TablaSimbolos_1 = __importDefault(require("../../TablaSimbolos/TablaSimbolos"));
var Break_1 = __importDefault(require("../SentenciasTransferencia/Break"));
var Caso = /** @class */ (function () {
    function Caso(valor, instrucciones) {
        this.valor = valor;
        this.instrucciones = instrucciones;
    }
    Caso.prototype.ejecutar = function (controlador, ts) {
        var ts_local = new TablaSimbolos_1.default(ts, ts.name);
        for (var _i = 0, _a = this.instrucciones; _i < _a.length; _i++) {
            var inst = _a[_i];
            var res = inst.ejecutar(controlador, ts_local);
            console.log(inst);
            if (res instanceof Break_1.default) {
                return res;
            }
        }
    };
    Caso.prototype.recorrer = function () {
        var padre;
        if (this.valor != null) {
            padre = new Nodo_1.default("Caso", "");
            var expresion = new Nodo_1.default("Expresion", "");
            expresion.AddHijo(this.valor.recorrer());
            var litaintrucciones = new Nodo_1.default("Intrucciones", "");
            for (var _i = 0, _a = this.instrucciones; _i < _a.length; _i++) {
                var ins = _a[_i];
                //console.log(ins)
                litaintrucciones.AddHijo(ins.recorrer());
            }
            padre.AddHijo(expresion);
            padre.AddHijo(litaintrucciones);
        }
        else {
            padre = new Nodo_1.default("Default", "");
            var litaintrucciones = new Nodo_1.default("Intrucciones", "");
            for (var _b = 0, _c = this.instrucciones; _b < _c.length; _b++) {
                var ins = _c[_b];
                //console.log(ins)
                litaintrucciones.AddHijo(ins.recorrer());
            }
            padre.AddHijo(litaintrucciones);
        }
        return padre;
    };
    return Caso;
}());
exports.default = Caso;
