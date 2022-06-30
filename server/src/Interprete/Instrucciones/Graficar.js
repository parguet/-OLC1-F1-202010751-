"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Nodo_1 = __importDefault(require("../Ast/Nodo"));
var Graficar = /** @class */ (function () {
    function Graficar(linea, columna) {
        this.columna = columna;
        this.linea = linea;
    }
    Graficar.prototype.ejecutar = function (controlador, ts) {
        console.log("ESTA ENTRANDO A GRAFICAR");
        controlador.graficar_ts(controlador, ts);
    };
    Graficar.prototype.recorrer = function () {
        var padre = new Nodo_1.default("Graficar_ts", "");
        return padre;
    };
    return Graficar;
}());
exports.default = Graficar;
