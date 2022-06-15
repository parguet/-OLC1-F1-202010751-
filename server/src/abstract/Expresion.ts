import { Retorno } from "./Retorno"
import { Environment } from "../symbols/environment";

export abstract class Expresion {

    constructor(public line: number, public column: number) {
        this.line = line
        this.column = column + 1
    }

    public abstract ejecutar(env:Environment): 
    Retorno;
    
}