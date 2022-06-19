import { Console } from "console";
import Errores from "../../Ast/Errores";
import Nodo from "../../Ast/Nodo";
import Controlador from "../../Controlador";
import Ifs from "../../Instrucciones/SentenciasControl/Ifs";
import { Expresion } from "../../Interfaces/Expresion";
import TablaSimbolos from "../../TablaSimbolos/TablaSimbolos";
import { tipo } from "../../TablaSimbolos/Tipo";
import Operacion, { Operador } from "./Operacion";

export default class Aritmetica extends Operacion implements Expresion{

    /**
     * @constructor este constructor utiliza el mismo de la clase Operacion
     */
    constructor(exp1: Expresion, signo_operador : string, exp2: Expresion, linea: number, columna : number, expU: boolean) {
        super(exp1, signo_operador, exp2, linea, columna, expU);
        
    }
    
    //geTipo retorna el tipo de la expresion aritmetica 
    getTipo(controlador: Controlador, ts: TablaSimbolos): tipo {
        let tipo_exp1 : tipo;
        let tipo_exp2 : tipo; 

        if(this.expU == false){
         
            tipo_exp1 = this.exp1.getTipo(controlador, ts);
            tipo_exp2 = this.exp2.getTipo(controlador,ts);

            if(tipo_exp1 == tipo.ERROR || tipo_exp2 == tipo.ERROR){
                return tipo.ERROR;
            }
        }else{
  
           
            tipo_exp1 = this.exp1.getTipo(controlador,ts);
            if(tipo_exp1 == tipo.ERROR ){
                return tipo.ERROR;
            }
            tipo_exp2 = tipo.ERROR;
        }

   
        switch (this.operador) {
            case Operador.SUMA:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.CARACTER){
                        return tipo.ENTERO;
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return tipo.DOBLE;
                    }else if(tipo_exp2 == tipo.CADENA){
                        return tipo.CADENA;
                    }else{
                        return tipo.ERROR;
                    }
                }else if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.DOBLE;
                    }else if(tipo_exp2 == tipo.CADENA){
                        return tipo.CADENA; 
                    }else{
                        return tipo.ERROR;
                    }
                }else if(tipo_exp1 == tipo.CARACTER){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.CARACTER ){
                        return tipo.ENTERO;
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return tipo.DOBLE; 
                    }else if(tipo_exp2 == tipo.CADENA ){
                        return tipo.CADENA; 
                    }
                    else{
                        return tipo.ERROR;
                    }
                }else if(tipo_exp1 == tipo.CADENA){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.BOOLEANO || tipo_exp2 == tipo.CARACTER || tipo_exp2 == tipo.CADENA){
                        return tipo.CADENA;
                    }else{
                        return tipo.ERROR;
                    }
                }
                break;
            case Operador.RESTA:
              
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.CARACTER){
                        return tipo.ENTERO;
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return tipo.DOBLE;
                    }else{
                        return tipo.ERROR;
                    }
                }else if(tipo_exp1 == tipo.CARACTER){
              
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.CARACTER ){
                      
                        return tipo.ENTERO;
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return tipo.DOBLE;
                    }else{
                        return tipo.ERROR;
                    }
                } else if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.DOBLE;
                    }else{
                        return tipo.ERROR;
                    }
                }
        
                break;
            case Operador.MULTIPLICACION:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO  || tipo_exp2 == tipo.CARACTER){
                        return tipo.ENTERO;
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return tipo.DOBLE;
                    }else{
                        return tipo.ERROR;
                    }
                }else if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE|| tipo_exp2 == tipo.BOOLEANO || tipo_exp2 == tipo.CARACTER){
                        return tipo.DOBLE;
                    }else{
                        return tipo.ERROR;
                    }
                }else if(tipo_exp1 == tipo.CARACTER){
                    if(tipo_exp2 == tipo.ENTERO){
                        return tipo.ENTERO;
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return tipo.DOBLE; 
                    }else if( tipo_exp2 == tipo.CARACTER){
                        return tipo.ENTERO; 
                    }else{
                        return tipo.ERROR;
                    }
                }
                
                break;
            case Operador.DIVISION:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.CARACTER){
                        return tipo.ENTERO;
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return tipo.DOBLE;
                    }else{
                        return tipo.ERROR;
                    }
                }else   if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.DOBLE;
                    }else{
                        return tipo.ERROR;
                    }
                }else   if(tipo_exp1 == tipo.CARACTER){
                    if(tipo_exp2 == tipo.ENTERO  || tipo_exp2 == tipo.CARACTER){
                        return tipo.ENTERO;
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return tipo.DOBLE;
                    }else{
                        return tipo.ERROR;
                    }
                }
                break;
            case Operador.MOD:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.CARACTER || tipo_exp2 == tipo.DOBLE){
                        return tipo.DOBLE;
                    }else{
                        return tipo.ERROR;
                    }
                }else if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.CARACTER || tipo_exp2 == tipo.DOBLE){
                        return tipo.DOBLE;
                    }else{
                        return tipo.ERROR;
                    }
                }else if(tipo_exp1 == tipo.CARACTER){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.CARACTER || tipo_exp2 == tipo.DOBLE){
                        return tipo.DOBLE;
                    }else{
                        return tipo.ERROR;
                    }
                }
                break;
            case Operador.POT:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.CARACTER || tipo_exp2 == tipo.DOBLE){
                        return tipo.DOBLE;
                    }else{
                        return tipo.ERROR;
                    }
                }else if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.CARACTER || tipo_exp2 == tipo.DOBLE){
                        return tipo.DOBLE;
                    }else{
                        return tipo.ERROR;
                    }
                } else if(tipo_exp1 == tipo.CARACTER){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.CARACTER || tipo_exp2 == tipo.DOBLE){
                        return tipo.DOBLE;
                    }else{
                        return tipo.ERROR;
                    }
                }
                break;
            case Operador.UNARIO:
                if(tipo_exp1 == tipo.ENTERO){
                    return tipo.ENTERO;
                }else if(tipo_exp1 == tipo.DOBLE){
                    return tipo.DOBLE;
                }else{
                    return tipo.ERROR;
                }
                break;    
            default:
                break;
        }

        return tipo.ERROR;
    }

    getValor(controlador: Controlador, ts: TablaSimbolos) {
        let valor_exp1;
        let valor_exp2;
        let valor_expU;

        let tipo_exp1 :tipo;
        let tipo_exp2 : tipo;
        let tipo_expU : tipo;

       
        if(this.expU == false){
            
            tipo_exp1 = this.exp1.getTipo(controlador,ts); // ENTERO
            tipo_exp2 = this.exp2.getTipo(controlador,ts); // DOBLE 
            
            tipo_expU = tipo.ERROR;

            valor_exp1 = this.exp1.getValor(controlador,ts); // 1 
            valor_exp2 = this.exp2.getValor(controlador,ts); // 2.5

        }else{
            tipo_expU = this.exp1.getTipo(controlador,ts);
            tipo_exp1 = tipo.ERROR;
            tipo_exp2 = tipo.ERROR;

            valor_expU = this.exp1.getValor(controlador,ts);

        }

        switch (this.operador) {
            case Operador.SUMA:
                if(tipo_exp1 === tipo.ENTERO){
                    if(tipo_exp2 === tipo.ENTERO){
                        return valor_exp1 + valor_exp2;
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (valor_exp1 + valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci = valor_exp2.charCodeAt(0);
                        return valor_exp1 + num_ascci;
                    }else if(tipo_exp2 == tipo.CADENA){
                        return valor_exp1 + valor_exp2;
                    }else{
                        let error = new Errores("Semantico", `Incompatibilidad de tipos.`, this.linea, this.columna);
                        controlador.errores.push(error);
                        return null;
                    }
                }else if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO){
                        console.log("XXXXXXXXXXXXXXXXXXXXX "+valor_exp1+" "+ valor_exp2 );
                        console.log(typeof(valor_exp1) + typeof(valor_exp2));
                        return (valor_exp1 + valor_exp2); 
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (valor_exp1 + valor_exp2).toFixed(2); // 1.1 + 2.5 = 3.6
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci = valor_exp2.charCodeAt(0);
                        return( valor_exp1 + num_ascci).toFixed(2);
                    }else if(tipo_exp2 == tipo.CADENA){
                        return valor_exp1 + valor_exp2;
                    }else{
                        let error = new Errores("Semantico", `Incompatibilidad de tipos.`, this.linea, this.columna);
                        controlador.errores.push(error);              
                        return null;
                    }
                }else if(tipo_exp1 == tipo.CARACTER){ 
                    // 'A' + 1 -> 65 + 1 -> 66
                    let num_ascci = valor_exp1.charCodeAt(0);
                    if(tipo_exp2 == tipo.ENTERO){
                        return num_ascci + valor_exp2; 
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (num_ascci + valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        return valor_exp1 + valor_exp2; //'A' + 'A' -> AA
                    }else if(tipo_exp2 == tipo.CADENA){
                        return valor_exp1 + valor_exp2; //'A' + "hola" -> "Ahola"
                    }else{
                        let error = new Errores("Semantico", `Incompatibilidad de tipos.`, this.linea, this.columna);
                        controlador.errores.push(error);
                        return null;
                    }
                }else if(tipo_exp1 == tipo.CADENA){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.BOOLEANO || tipo_exp2 == tipo.CARACTER || tipo_exp2 == tipo.CADENA){
                        return valor_exp1 + valor_exp2;
                    }else{
                        let error = new Errores("Semantico", `Incompatibilidad de tipos.`, this.linea, this.columna);
                        controlador.errores.push(error);
                        return null;
                    }
                }else{
                    controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                    return null;
                }
                break;
            case Operador.RESTA:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO){
                        return valor_exp1 - valor_exp2;
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (valor_exp1 - valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci = valor_exp2.charCodeAt(0);
                        return valor_exp1 - num_ascci;
                    }else{
                        let error = new Errores("Semantico", `Incompatibilidad de tipos.`, this.linea, this.columna);
                        controlador.errores.push(error);
                        return null;
                    }
                }else if(tipo_exp1 == tipo.CARACTER){
                    if(tipo_exp2 == tipo.ENTERO){
                        let num_ascci = valor_exp1.charCodeAt(0);
                        return num_ascci - valor_exp2;
                    }else if(tipo_exp2 == tipo.DOBLE){
                        let num_ascci = valor_exp1.charCodeAt(0);
                        return (num_ascci - valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci = valor_exp1.charCodeAt(0);
                        return num_ascci - valor_exp2;
                    }else{
                        let error = new Errores("Semantico", `Incompatibilidad de tipos.`, this.linea, this.columna);
                        controlador.errores.push(error);
                        return null;
                    }
                }else if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO){
                        return (valor_exp1 - valor_exp2).toFixed(2); // 1.1 +2.5 = 3.6
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (valor_exp1 - valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci = valor_exp2.charCodeAt(0);
                        return (valor_exp1 - num_ascci).toFixed(2);
                    }else{
                        let error = new Errores("Semantico", `Incompatibilidad de tipos.`, this.linea, this.columna);
                        controlador.errores.push(error);
                        return null;
                    }
                }else{
                    controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                    return null;
                }
                break;
            case Operador.MULTIPLICACION:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO){
                        return valor_exp1 * valor_exp2;
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (valor_exp1 * valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci = valor_exp2.charCodeAt(0);
                        return valor_exp1 * num_ascci;
                    }else{
                       let error = new Errores("Semantico", `Incompatibilidad de tipos.`, this.linea, this.columna);
                       controlador.errores.push(error);
                       return null;
                    }
                }else if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO){
                        return (valor_exp1 * valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (valor_exp1 * valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci = valor_exp2.charCodeAt(0);
                        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA   <>"+typeof(valor_exp1)+"<>"+typeof(num_ascci));
                        return (valor_exp1 * num_ascci).toFixed(2);
                    }else{
                        controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                        return null;
                    }
                }else if(tipo_exp1 == tipo.CARACTER){
                    let num_ascci1 = valor_exp1.charCodeAt(0);
                    if(tipo_exp2 == tipo.ENTERO){
                        return num_ascci1 * valor_exp2;
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (num_ascci1 * valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci2 = valor_exp2.charCodeAt(0);
                        return (num_ascci1 * num_ascci2).toFixed(2);
                    }else{
                        controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                        return null;
                    }
                }else{
                    controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                    return null;
                }
                break;
            case Operador.DIVISION:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO){
                        return Math.trunc(valor_exp1 / valor_exp2);
                    }else if(tipo_exp2 == tipo.DOBLE){
                        console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD   <>"+typeof(valor_exp1)+ " "+typeof(valor_exp2)+ " "+valor_exp1+" "+valor_exp2);
                        return (valor_exp1 / valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci = valor_exp2.charCodeAt(0);
                        return Math.trunc(valor_exp1 / num_ascci);
                    }else{
                        controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                        //reportar error semantico
                        return null;
                    }
                }else if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO){
                        return (valor_exp1 / valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (valor_exp1 / valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci = valor_exp2.charCodeAt(0);
                        return (valor_exp1 / num_ascci).toFixed(2);
                    }else{
                        controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                        return null;
                    }
                }else if(tipo_exp1 == tipo.CARACTER){
                    let num_ascci1 = valor_exp1.charCodeAt(0);
                    if(tipo_exp2 == tipo.ENTERO){
                        return Math.trunc(num_ascci1 / valor_exp2);
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (num_ascci1 / valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci2 = valor_exp2.charCodeAt(0);
                        return Math.trunc(num_ascci1 / num_ascci2);
                    }else{
                        controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                        return null;
                    }}else{
                        controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                        return null;
                    }
                break;
            case Operador.MOD:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO){
                        return (valor_exp1 % valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (valor_exp1 % valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci2 = valor_exp2.charCodeAt(0);
                        return (valor_exp1 % num_ascci2).toFixed(2);
                    }else{
                        controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                        return null;
                    }
                }else if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO){
                        return (valor_exp1 % valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (valor_exp1 % valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci2 = valor_exp2.charCodeAt(0);
                        return (valor_exp1 % num_ascci2).toFixed(2);
                    }else{
                        controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                        return null;
                    }
                }else if(tipo_exp1 == tipo.CARACTER){
                    let num_ascci1 = valor_exp1.charCodeAt(0);
                    if(tipo_exp2 == tipo.ENTERO){
                        return (num_ascci1 % valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (num_ascci1 % valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci2 = valor_exp2.charCodeAt(0);
                        return (num_ascci1 % num_ascci2).toFixed(2);
                    }else{
                        controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                        return null;
                    }
                }else{
                    controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                    return null;
                }
                break;
            case Operador.POT:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO){
                        return (valor_exp1 ** valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (valor_exp1 ** valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci2 = valor_exp2.charCodeAt(0);
                        return (valor_exp1 ** num_ascci2).toFixed(2);
                    }else{
                        controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                        return null;
                    }
                }else if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO){
                        return (valor_exp1 ** valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (valor_exp1 ** valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci2 = valor_exp2.charCodeAt(0);
                        return (valor_exp1 ** num_ascci2).toFixed(2);
                    }else{
                        controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                        return null;
                    }
                }else if(tipo_exp1 == tipo.CARACTER){
                    let num_ascci1 = valor_exp1.charCodeAt(0);
                    if(tipo_exp2 == tipo.ENTERO){
                        return (num_ascci1 ** valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.DOBLE){
                        return (num_ascci1 ** valor_exp2).toFixed(2);
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci2 = valor_exp2.charCodeAt(0);
                        return (num_ascci1 ** num_ascci2).toFixed(2);
                    }else{
                        controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                        return null;
                    }
                }else{
                    controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                    return null;
                }
                break;
            case Operador.UNARIO:
                if(tipo_expU == tipo.ENTERO || tipo_expU == tipo.DOBLE){
                    return -valor_expU;
                }else{
                    controlador.errores.push(new Errores("Semantico", `Incompatibilidad de tipos`, this.linea, this.columna));
                    return null;
                }
                break;
            default:
                break;
        }
        return null;
    }

    recorrer(): Nodo {
        let padre = new Nodo("Exp","");

        if(this.expU){ //-1
            padre.AddHijo(new Nodo(this.signo_operador,""));
            padre.AddHijo(this.exp1.recorrer());
        }else{ // 1+1
            padre.AddHijo(this.exp1.recorrer());
            padre.AddHijo(new Nodo(this.signo_operador,""));
            padre.AddHijo(this.exp2.recorrer());
        }
        
       return padre;
    }

}