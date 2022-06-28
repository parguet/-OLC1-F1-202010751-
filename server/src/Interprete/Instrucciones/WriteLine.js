"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Nodo_1 = __importDefault(require("../Ast/Nodo"));
var Tipo_1 = require("../TablaSimbolos/Tipo");
var WriteLine = /** @class */ (function () {
    function WriteLine(expresion, validacion, linea, columna) {
        this.expresion = expresion;
        this.linea = linea;
        this.columna = columna;
        this.validacion = validacion;
    }
    WriteLine.prototype.ejecutar = function (controlador, ts) {
        var tipo_valor = this.expresion.getTipo(controlador, ts);
        if (tipo_valor == Tipo_1.tipo.ENTERO || tipo_valor == Tipo_1.tipo.DOBLE || tipo_valor == Tipo_1.tipo.CARACTER || tipo_valor == Tipo_1.tipo.BOOLEANO) {
            var numero = this.expresion.getValor(controlador, ts);
            if (tipo_valor == Tipo_1.tipo.DOBLE) {
                if (numero % 1 == 0) {
                    controlador.print(numero.toFixed(2), this.validacion);
                }
                else {
                    controlador.print(numero, this.validacion);
                }
            }
            else {
                var valor = this.expresion.getValor(controlador, ts);
                controlador.print(valor, this.validacion);
            }
        }
        if (tipo_valor == Tipo_1.tipo.CADENA) {
            var cadena = this.expresion.getValor(controlador, ts);
            cadena = cadena.replace("\t", "\\t");
            controlador.print(cadena, this.validacion);
        }
    };
    WriteLine.prototype.recorrer = function () {
        var padre = new Nodo_1.default("INSTRUCCION", "");
        if (this.validacion) {
            padre.AddHijo(new Nodo_1.default("println", ""));
        }
        else {
            padre.AddHijo(new Nodo_1.default("print", ""));
        }
        if (this.expresion != null) {
            padre.AddHijo(this.expresion.recorrer());
        }
        return padre;
    };
    return WriteLine;
}());
exports.default = WriteLine;
