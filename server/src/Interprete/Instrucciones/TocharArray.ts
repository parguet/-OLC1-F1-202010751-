import Errores from "../Ast/Errores";
import Nodo from "../Ast/Nodo";
import Controlador from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { Instruccion } from "../Interfaces/Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
import Tipo, { tipo } from "../TablaSimbolos/Tipo";

export default class TocharArray implements Instruccion {

    public type: Tipo;
    public id: string;
    public expresion: Expresion;

    public linea: number;
    public columna: number;



    constructor(type: Tipo, id: string, expresion: any, linea: number, columna: number) {
        this.type = type;
        this.id = id;
        this.expresion = expresion;
        this.linea = linea;
        this.columna = columna;

    }ejecutar(controlador: Controlador, ts: TablaSimbolos) {
        
        if(!ts.existeEnActual(this.id)){
            if(this.type.gettipo()==tipo.CARACTER){
                if(this.expresion.getTipo(controlador, ts)==tipo.CADENA){
                    let exp = this.expresion.getValor(controlador, ts);
                    let vector = [];
                    for (let i=0; i<exp.length; i++) {
                        vector.push(exp[i]);
                    }
                    let nuevo_simbolo = new Simbolo(4, this.type, this.id, vector, this.linea, this.columna);
                    ts.agregar(this.id, nuevo_simbolo);
                }else{
                    let error = new Errores("Semantico", `To char array solo acepta cadenas`, this.linea, this.columna);
                    controlador.errores.push(error);
                }
            }else{
                let error = new Errores("Semantico", `El tipo no es char`, this.linea, this.columna);
            controlador.errores.push(error);
            }
        }else{
            let error = new Errores("Semantico", `La variable ${this.id} ya existe en el entorno actual, por lo que no se puede declarar.`, this.linea, this.columna);
            controlador.errores.push(error);
        }
    }
recorrer(): Nodo {
    let padre = new Nodo("tocharArray", "");

    return padre;
    }
}
