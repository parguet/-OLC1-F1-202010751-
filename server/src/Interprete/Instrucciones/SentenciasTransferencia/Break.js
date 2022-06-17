"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Nodo_1 = __importDefault(require("../../Ast/Nodo"));
var Break = /** @class */ (function () {
    function Break() {
    }
    Break.prototype.ejecutar = function (controlador, ts) {
        return this;
    };
    Break.prototype.recorrer = function () {
        var padre = new Nodo_1.default("Break", "");
        return padre;
    };
    return Break;
}());
exports.default = Break;
