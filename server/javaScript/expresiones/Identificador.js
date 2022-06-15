"use strict";
//import Errores from "../Ast/Errores";
//import Nodo from "../Ast/Nodo";
//import Controlador from "../Controlador";
//import { Expresion } from "../Interfaces/Expresion";
//import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
//import { tipo } from "../TablaSimbolos/Tipo";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identificador = void 0;
const Expresion_1 = require("../abstract/Expresion");
class Identificador extends Expresion_1.Expresion {
    constructor(identifador, linea, columna) {
        super(linea, columna);
        this.identificador = identifador;
    }
    ejecutar(env) {
        throw new Error("Method not implemented.");
    }
}
exports.Identificador = Identificador;
