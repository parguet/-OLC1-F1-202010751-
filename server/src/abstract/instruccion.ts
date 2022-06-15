import { Environment } from "../symbols/environment";

export abstract class Instruccion {
    constructor(
        public line: number,
        public column: number
    ) {
        this.line = line;
        this.column = column;
    }

    public abstract ejecutar(Environment : Environment):any;

}