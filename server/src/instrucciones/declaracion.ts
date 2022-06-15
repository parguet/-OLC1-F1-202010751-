import { Instruccion } from '../abstract/instruccion';
import { Environment } from '../symbols/environment';
import { Type } from '../symbols/type';

export class Declaracion extends Instruccion {
    constructor(
        public nombre: []|any,
        public tipo: Type,
        public expresion: any,
        line: number,
        column: number
        // public expresion: XPathExpression
    ) {
        super(line, column);
    }

    public ejecutar(Environment : Environment) {
        // codigo analisisis semantico
        console.log('Declaracion');
        Environment.guardar_variable(this.nombre, this.expresion, this.tipo);

    }
}
