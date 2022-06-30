import Nodo from "../Ast/Nodo";
import Controlador from "../Controlador";
import { Instruccion } from "../Interfaces/Instruccion";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";

export default class Graficar implements Instruccion{
    public linea: number;
    public columna: number;
    constructor(linea:number, columna:number){
        this.columna = columna;
        this.linea = linea;
    }
    ejecutar(controlador: Controlador, ts: TablaSimbolos) {
        console.log("ESTA ENTRANDO A GRAFICAR");
        controlador.graficar_ts(controlador,ts);
    }
    recorrer(): Nodo {
        let padre = new Nodo("Graficar_ts", "");
        return padre;
    }

    
}