"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Nodo_1 = __importDefault(require("../Ast/Nodo"));
var bloque = /** @class */ (function () {
    function bloque(instrucciones, linea, columna) {
        this.instrucciones = instrucciones;
        this.linea = linea;
        this.columna = columna;
    }
    bloque.prototype.ejecutar = function (controlador, ts) {
        for (var i = 0; i < this.instrucciones.length; i++) {
            this.instrucciones[i].ejecutar(controlador, ts);
        }
    };
    bloque.prototype.recorrer = function () {
        var raiz = new Nodo_1.default("BLOQUE", "");
        for (var _i = 0, _a = this.instrucciones; _i < _a.length; _i++) {
            var inst = _a[_i];
            raiz.AddHijo(inst.recorrer());
        }
        return raiz;
    };
    return bloque;
}());
exports.default = bloque;
