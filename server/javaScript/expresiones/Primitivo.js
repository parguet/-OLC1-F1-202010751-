"use strict";
//import Nodo from "../Ast/Nodo";
//import Controlador from "../Controlador";
//import { Expresion } from "../Interfaces/Expresion";
//import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
//import Tipo, { tipo } from "../TablaSimbolos/Tipo";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primitivo = void 0;
const Expresion_1 = require("../abstract/Expresion");
const type_1 = require("../symbols/type");
class Primitivo extends Expresion_1.Expresion {
    constructor(valor_primitivo, tipo, linea, columna) {
        super(linea, columna);
        this.valor_primitivo = valor_primitivo;
        this.tipo = tipo;
    }
    ejecutar(env) {
        if (this.tipo == type_1.Type.INT) {
            return { val: this.valor_primitivo, type: type_1.Type.INT };
        }
        else if (this.tipo == type_1.Type.DOUBLE) {
            return { val: this.valor_primitivo, type: type_1.Type.DOUBLE };
        }
        else if (this.tipo == type_1.Type.STRING) {
            return { val: this.valor_primitivo, type: type_1.Type.STRING };
        }
        else if (this.tipo == type_1.Type.CHAR) {
            return { val: this.valor_primitivo, type: type_1.Type.CHAR };
        }
        else if (this.tipo == type_1.Type.BOOLEAN) {
            return { val: this.valor_primitivo, type: type_1.Type.BOOLEAN };
        }
        else {
            return { val: this.valor_primitivo, type: type_1.Type.error };
        }
    }
}
exports.Primitivo = Primitivo;
