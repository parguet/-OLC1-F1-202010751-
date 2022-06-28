"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Nodo_1 = __importDefault(require("../Ast/Nodo"));
var Tipo_1 = require("../TablaSimbolos/Tipo");
var Ternario = /** @class */ (function () {
    function Ternario(condicion, verdadero, falso, linea, columna) {
        this.condicion = condicion;
        this.verdadero = verdadero;
        this.falso = falso;
        this.linea = linea;
        this.columna = columna;
    }
    Ternario.prototype.ejecutar = function (controlador, ts) {
        if (this.condicion.getTipo(controlador, ts) == Tipo_1.tipo.BOOLEANO) {
            if (this.condicion.getValor(controlador, ts) == true) {
                this.verdadero.ejecutar(controlador, ts);
            }
            else if (this.condicion.getValor(controlador, ts) == false) {
                this.falso.ejecutar(controlador, ts);
            }
        }
    };
    Ternario.prototype.recorrer = function () {
        var padre = new Nodo_1.default("Ternario", "");
        padre.AddHijo(this.verdadero.recorrer());
        padre.AddHijo(new Nodo_1.default("?", ""));
        padre.AddHijo(this.falso.recorrer());
        return padre;
    };
    return Ternario;
}());
exports.default = Ternario;
