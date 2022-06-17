"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Nodo_1 = __importDefault(require("../../Ast/Nodo"));
var Retorno = /** @class */ (function () {
    function Retorno(valor_retorno) {
        this.valor_retorno = valor_retorno;
    }
    Retorno.prototype.ejecutar = function (controlador, ts) {
        //Verificamos que el valor no sea nulo 
        if (this.valor_retorno != null) {
            return this.valor_retorno.getValor(controlador, ts);
        }
        else {
            this;
        }
    };
    Retorno.prototype.recorrer = function () {
        var padre = new Nodo_1.default("Return", "");
        padre.AddHijo(this.valor_retorno.recorrer());
        return padre;
    };
    return Retorno;
}());
exports.default = Retorno;
