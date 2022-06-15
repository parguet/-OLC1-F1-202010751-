//import Errores from "../Ast/Errores";
//import Nodo from "../Ast/Nodo";
//import Controlador from "../Controlador";
//import { Expresion } from "../Interfaces/Expresion";
//import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
//import { tipo } from "../TablaSimbolos/Tipo";

import { Expresion } from "../abstract/Expresion";
import { Retorno } from "../abstract/Retorno";
import { Environment } from "../symbols/environment";


export class Identificador extends Expresion{
    

    public identificador : string;

    public I1 : any;
    public I2 : any;

    constructor(identifador: string, linea : number, columna : number) {
        super(linea, columna);
        this.identificador = identifador;
    }


    public ejecutar(env: Environment): Retorno {
        throw new Error("Method not implemented.");
    }
   
    
}