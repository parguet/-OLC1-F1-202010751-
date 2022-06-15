//import Nodo from "../Ast/Nodo";
//import Controlador from "../Controlador";
//import { Expresion } from "../Interfaces/Expresion";
//import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
//import Tipo, { tipo } from "../TablaSimbolos/Tipo";

import { Expresion } from "../abstract/Expresion";
import { Retorno } from "../abstract/Retorno";
import { Environment } from "../symbols/environment";
import { Type } from "../symbols/type";

export class Primitivo extends Expresion{
    
    public valor_primitivo : any;
    public tipo : Type;

    constructor(valor_primitivo : any, tipo : Type , linea : number, columna: number) {
        super(linea, columna);
        this.valor_primitivo = valor_primitivo;
        this.tipo = tipo;
    }

    public ejecutar(env : Environment) : Retorno{
        if(this.tipo == Type.INT){
            return {val : this.valor_primitivo, type : Type.INT};
        }else if(this.tipo == Type.DOUBLE){
            return {val : this.valor_primitivo, type : Type.DOUBLE};
        }else if(this.tipo == Type.STRING){
            return {val : this.valor_primitivo, type : Type.STRING};
        }else if(this.tipo ==  Type.CHAR){
            return {val : this.valor_primitivo, type : Type.CHAR};
        }else if(this.tipo == Type.BOOLEAN){
            return {val : this.valor_primitivo, type : Type.BOOLEAN};
        }else{
            return {val : this.valor_primitivo, type : Type.error};
        }
    }

}