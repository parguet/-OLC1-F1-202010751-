"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Nodo_1 = __importDefault(require("../Ast/Nodo"));
var StartWith = /** @class */ (function () {
    function StartWith(llamada, linea, columna) {
        this.llamada = llamada;
        this.linea = linea;
        this.column = columna;
    }
    StartWith.prototype.ejecutar = function (controlador, ts) {
        this.llamada.ejecutar(controlador, ts);
    };
    StartWith.prototype.recorrer = function () {
        var padre = new Nodo_1.default("RUN", "");
        padre.AddHijo(this.llamada.recorrer());
        return padre;
    };
    return StartWith;
}());
exports.default = StartWith;
