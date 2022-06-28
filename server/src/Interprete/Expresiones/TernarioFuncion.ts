import Nodo from "../Ast/Nodo";
import Controlador from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { Instruccion } from "../Interfaces/Instruccion";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";import { tipo } from "../TablaSimbolos/Tipo";

export default class Ternario implements Instruccion{

    public condicion : Expresion;
    public verdadero : Instruccion;
    public falso : Instruccion;
    public linea : number;
    public columna : number;

    constructor(condicion : Expresion, verdadero :Instruccion, falso :Instruccion, linea: number, columna: number) {
        this.condicion = condicion;
        this.verdadero = verdadero;
        this.falso = falso;
        this.linea = linea;
        this.columna = columna;
    }
    ejecutar(controlador: Controlador, ts: TablaSimbolos) {
        
        if(this.condicion.getTipo(controlador, ts) == tipo.BOOLEANO){
            if(this.condicion.getValor(controlador, ts) == true){
                this.verdadero.ejecutar(controlador, ts);
            }else if (this.condicion.getValor(controlador, ts) == false){
                this.falso.ejecutar(controlador,ts);
            }
        }

    }
    recorrer(): Nodo {
        let padre = new Nodo("Ternario","");
        padre.AddHijo(this.verdadero.recorrer())
        padre.AddHijo(new Nodo("?",""))
        padre.AddHijo(this.falso.recorrer())

        return padre;
    }
}