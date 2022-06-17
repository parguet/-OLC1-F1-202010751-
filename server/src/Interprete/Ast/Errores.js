"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lista_Errores_1 = require("./Lista_Errores");
var Errores = /** @class */ (function () {
    function Errores(tipo, descripcion, linea, columna) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.linea = linea;
        this.columna = columna;
        if (tipo == "Sintactico" || tipo == "Lexico") {
            Lista_Errores_1.lista_errores.Errores.push(this);
        }
    }
    return Errores;
}());
exports.default = Errores;
