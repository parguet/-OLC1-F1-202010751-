import Nodo from "../Ast/Nodo";
import Controlador from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { Instruccion } from "../Interfaces/Instruccion";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";

export default class bloque implements Instruccion{


    public instrucciones : Array<Instruccion>;
    public linea : number;
    public columna : number;

    constructor(instrucciones : Array<Instruccion> , linea : number, columna: number) {
        this.instrucciones =instrucciones;
        this.linea = linea;
        this.columna = columna;
    }


    ejecutar(controlador: Controlador, ts: TablaSimbolos) {
        let tsNuevo = new TablaSimbolos(ts);
        for(let i = 0; i < this.instrucciones.length; i++){
            this.instrucciones[i].ejecutar(controlador, tsNuevo);
        }
    }

    recorrer(): Nodo {
        let raiz = new Nodo("BLOQUE","");

        for(let inst of this.instrucciones){
            raiz.AddHijo(inst.recorrer());
        }
        return raiz;
    }

}