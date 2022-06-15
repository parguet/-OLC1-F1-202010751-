"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaracion = void 0;
const instruccion_1 = require("../abstract/instruccion");
class Declaracion extends instruccion_1.Instruccion {
    constructor(nombre, tipo, expresion, line, column
    // public expresion: XPathExpression
    ) {
        super(line, column);
        this.nombre = nombre;
        this.tipo = tipo;
        this.expresion = expresion;
    }
    ejecutar(Environment) {
        // codigo analisisis semantico
        console.log('Declaracion');
        Environment.guardar_variable(this.nombre, this.expresion, this.tipo);
    }
}
exports.Declaracion = Declaracion;
