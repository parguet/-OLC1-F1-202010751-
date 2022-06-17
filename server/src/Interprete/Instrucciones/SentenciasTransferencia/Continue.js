"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Nodo_1 = __importDefault(require("../../Ast/Nodo"));
var Continue = /** @class */ (function () {
    function Continue() {
    }
    Continue.prototype.ejecutar = function (controlador, ts) {
        return this;
    };
    Continue.prototype.recorrer = function () {
        var padre = new Nodo_1.default("Continue", "");
        return padre;
    };
    return Continue;
}());
exports.default = Continue;
