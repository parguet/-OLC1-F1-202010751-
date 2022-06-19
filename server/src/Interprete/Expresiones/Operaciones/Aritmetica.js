"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Errores_1 = __importDefault(require("../../Ast/Errores"));
var Nodo_1 = __importDefault(require("../../Ast/Nodo"));
var Tipo_1 = require("../../TablaSimbolos/Tipo");
var Operacion_1 = __importStar(require("./Operacion"));
var Aritmetica = /** @class */ (function (_super) {
    __extends(Aritmetica, _super);
    /**
     * @constructor este constructor utiliza el mismo de la clase Operacion
     */
    function Aritmetica(exp1, signo_operador, exp2, linea, columna, expU) {
        return _super.call(this, exp1, signo_operador, exp2, linea, columna, expU) || this;
    }
    //geTipo retorna el tipo de la expresion aritmetica 
    Aritmetica.prototype.getTipo = function (controlador, ts) {
        var tipo_exp1;
        var tipo_exp2;
        if (this.expU == false) {
            tipo_exp1 = this.exp1.getTipo(controlador, ts);
            tipo_exp2 = this.exp2.getTipo(controlador, ts);
            if (tipo_exp1 == Tipo_1.tipo.ERROR || tipo_exp2 == Tipo_1.tipo.ERROR) {
                return Tipo_1.tipo.ERROR;
            }
        }
        else {
            tipo_exp1 = this.exp1.getTipo(controlador, ts);
            if (tipo_exp1 == Tipo_1.tipo.ERROR) {
                return Tipo_1.tipo.ERROR;
            }
            tipo_exp2 = Tipo_1.tipo.ERROR;
        }
        switch (this.operador) {
            case Operacion_1.Operador.SUMA:
                if (tipo_exp1 == Tipo_1.tipo.ENTERO) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        return Tipo_1.tipo.ENTERO;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CADENA) {
                        return Tipo_1.tipo.CADENA;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.DOBLE) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.DOBLE || tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CADENA) {
                        return Tipo_1.tipo.CADENA;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.CARACTER) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        return Tipo_1.tipo.ENTERO;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CADENA) {
                        return Tipo_1.tipo.CADENA;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.CADENA) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.DOBLE || tipo_exp2 == Tipo_1.tipo.BOOLEANO || tipo_exp2 == Tipo_1.tipo.CARACTER || tipo_exp2 == Tipo_1.tipo.CADENA) {
                        return Tipo_1.tipo.CADENA;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                break;
            case Operacion_1.Operador.RESTA:
                if (tipo_exp1 == Tipo_1.tipo.ENTERO) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        return Tipo_1.tipo.ENTERO;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.CARACTER) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        return Tipo_1.tipo.ENTERO;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.DOBLE) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.DOBLE || tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                break;
            case Operacion_1.Operador.MULTIPLICACION:
                if (tipo_exp1 == Tipo_1.tipo.ENTERO) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        return Tipo_1.tipo.ENTERO;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.DOBLE) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.DOBLE || tipo_exp2 == Tipo_1.tipo.BOOLEANO || tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.CARACTER) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return Tipo_1.tipo.ENTERO;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        return Tipo_1.tipo.ENTERO;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                break;
            case Operacion_1.Operador.DIVISION:
                if (tipo_exp1 == Tipo_1.tipo.ENTERO) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        return Tipo_1.tipo.ENTERO;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.DOBLE) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.DOBLE || tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.CARACTER) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        return Tipo_1.tipo.ENTERO;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                break;
            case Operacion_1.Operador.MOD:
                if (tipo_exp1 == Tipo_1.tipo.ENTERO) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.CARACTER || tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.DOBLE) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.CARACTER || tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.CARACTER) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.CARACTER || tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                break;
            case Operacion_1.Operador.POT:
                if (tipo_exp1 == Tipo_1.tipo.ENTERO) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.CARACTER || tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.DOBLE) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.CARACTER || tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.CARACTER) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.CARACTER || tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return Tipo_1.tipo.DOBLE;
                    }
                    else {
                        return Tipo_1.tipo.ERROR;
                    }
                }
                break;
            case Operacion_1.Operador.UNARIO:
                if (tipo_exp1 == Tipo_1.tipo.ENTERO) {
                    return Tipo_1.tipo.ENTERO;
                }
                else if (tipo_exp1 == Tipo_1.tipo.DOBLE) {
                    return Tipo_1.tipo.DOBLE;
                }
                else {
                    return Tipo_1.tipo.ERROR;
                }
                break;
            default:
                break;
        }
        return Tipo_1.tipo.ERROR;
    };
    Aritmetica.prototype.getValor = function (controlador, ts) {
        var valor_exp1;
        var valor_exp2;
        var valor_expU;
        var tipo_exp1;
        var tipo_exp2;
        var tipo_expU;
        if (this.expU == false) {
            tipo_exp1 = this.exp1.getTipo(controlador, ts);
            tipo_exp2 = this.exp2.getTipo(controlador, ts);
            tipo_expU = Tipo_1.tipo.ERROR;
            valor_exp1 = this.exp1.getValor(controlador, ts);
            valor_exp2 = this.exp2.getValor(controlador, ts);
        }
        else {
            tipo_expU = this.exp1.getTipo(controlador, ts);
            tipo_exp1 = Tipo_1.tipo.ERROR;
            tipo_exp2 = Tipo_1.tipo.ERROR;
            valor_expU = this.exp1.getValor(controlador, ts);
        }
        switch (this.operador) {
            case Operacion_1.Operador.SUMA:
                if (tipo_exp1 === Tipo_1.tipo.ENTERO) {
                    if (tipo_exp2 === Tipo_1.tipo.ENTERO) {
                        return valor_exp1 + valor_exp2;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((valor_exp1 + valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci = valor_exp2.charCodeAt(0);
                        return valor_exp1 + num_ascci;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CADENA) {
                        return valor_exp1 + valor_exp2;
                    }
                    else {
                        var error = new Errores_1.default("Semantico", "Incompatibilidad de tipos.", this.linea, this.columna);
                        controlador.errores.push(error);
                        return null;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.DOBLE) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        console.log("XXXXXXXXXXXXXXXXXXXXX " + valor_exp1 + " " + valor_exp2);
                        console.log(typeof (valor_exp1) + typeof (valor_exp2));
                        return (valor_exp1 + valor_exp2);
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((valor_exp1 + valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci = valor_exp2.charCodeAt(0);
                        return parseFloat((valor_exp1 + num_ascci).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CADENA) {
                        return valor_exp1 + valor_exp2;
                    }
                    else {
                        var error = new Errores_1.default("Semantico", "Incompatibilidad de tipos.", this.linea, this.columna);
                        controlador.errores.push(error);
                        return null;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.CARACTER) {
                    // 'A' + 1 -> 65 + 1 -> 66
                    var num_ascci = valor_exp1.charCodeAt(0);
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return num_ascci + valor_exp2;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((num_ascci + valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        return valor_exp1 + valor_exp2; //'A' + 'A' -> AA
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CADENA) {
                        return valor_exp1 + valor_exp2; //'A' + "hola" -> "Ahola"
                    }
                    else {
                        var error = new Errores_1.default("Semantico", "Incompatibilidad de tipos.", this.linea, this.columna);
                        controlador.errores.push(error);
                        return null;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.CADENA) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO || tipo_exp2 == Tipo_1.tipo.DOBLE || tipo_exp2 == Tipo_1.tipo.BOOLEANO || tipo_exp2 == Tipo_1.tipo.CARACTER || tipo_exp2 == Tipo_1.tipo.CADENA) {
                        return valor_exp1 + valor_exp2;
                    }
                    else {
                        var error = new Errores_1.default("Semantico", "Incompatibilidad de tipos.", this.linea, this.columna);
                        controlador.errores.push(error);
                        return null;
                    }
                }
                else {
                    controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.RESTA:
                if (tipo_exp1 == Tipo_1.tipo.ENTERO) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return valor_exp1 - valor_exp2;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((valor_exp1 - valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci = valor_exp2.charCodeAt(0);
                        return valor_exp1 - num_ascci;
                    }
                    else {
                        var error = new Errores_1.default("Semantico", "Incompatibilidad de tipos.", this.linea, this.columna);
                        controlador.errores.push(error);
                        return null;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.CARACTER) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        var num_ascci = valor_exp1.charCodeAt(0);
                        return num_ascci - valor_exp2;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        var num_ascci = valor_exp1.charCodeAt(0);
                        return parseFloat((num_ascci - valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci = valor_exp1.charCodeAt(0);
                        return num_ascci - valor_exp2;
                    }
                    else {
                        var error = new Errores_1.default("Semantico", "Incompatibilidad de tipos.", this.linea, this.columna);
                        controlador.errores.push(error);
                        return null;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.DOBLE) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return parseFloat((valor_exp1 - valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((valor_exp1 - valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci = valor_exp2.charCodeAt(0);
                        return parseFloat((valor_exp1 - num_ascci).toFixed(2));
                    }
                    else {
                        var error = new Errores_1.default("Semantico", "Incompatibilidad de tipos.", this.linea, this.columna);
                        controlador.errores.push(error);
                        return null;
                    }
                }
                else {
                    controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.MULTIPLICACION:
                if (tipo_exp1 == Tipo_1.tipo.ENTERO) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return valor_exp1 * valor_exp2;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((valor_exp1 * valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci = valor_exp2.charCodeAt(0);
                        return valor_exp1 * num_ascci;
                    }
                    else {
                        var error = new Errores_1.default("Semantico", "Incompatibilidad de tipos.", this.linea, this.columna);
                        controlador.errores.push(error);
                        return null;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.DOBLE) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return parseFloat((valor_exp1 * valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((valor_exp1 * valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci = valor_exp2.charCodeAt(0);
                        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA   <>" + typeof (valor_exp1) + "<>" + typeof (num_ascci));
                        return parseFloat((valor_exp1 * num_ascci).toFixed(2));
                    }
                    else {
                        controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                        return null;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.CARACTER) {
                    var num_ascci1 = valor_exp1.charCodeAt(0);
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return num_ascci1 * valor_exp2;
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((num_ascci1 * valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci2 = valor_exp2.charCodeAt(0);
                        return parseFloat((num_ascci1 * num_ascci2).toFixed(2));
                    }
                    else {
                        controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                        return null;
                    }
                }
                else {
                    controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.DIVISION:
                if (tipo_exp1 == Tipo_1.tipo.ENTERO) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return Math.trunc(valor_exp1 / valor_exp2);
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD   <>" + typeof (valor_exp1) + " " + typeof (valor_exp2) + " " + valor_exp1 + " " + valor_exp2);
                        return parseFloat((valor_exp1 / valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci = valor_exp2.charCodeAt(0);
                        return Math.trunc(valor_exp1 / num_ascci);
                    }
                    else {
                        controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                        //reportar error semantico
                        return null;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.DOBLE) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return parseFloat((valor_exp1 / valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((valor_exp1 / valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci = valor_exp2.charCodeAt(0);
                        return parseFloat((valor_exp1 / num_ascci).toFixed(2));
                    }
                    else {
                        controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                        return null;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.CARACTER) {
                    var num_ascci1 = valor_exp1.charCodeAt(0);
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return Math.trunc(num_ascci1 / valor_exp2);
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((num_ascci1 / valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci2 = valor_exp2.charCodeAt(0);
                        return Math.trunc(num_ascci1 / num_ascci2);
                    }
                    else {
                        controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                        return null;
                    }
                }
                else {
                    controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.MOD:
                if (tipo_exp1 == Tipo_1.tipo.ENTERO) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return parseFloat((valor_exp1 % valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((valor_exp1 % valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci2 = valor_exp2.charCodeAt(0);
                        return parseFloat((valor_exp1 % num_ascci2).toFixed(2));
                    }
                    else {
                        controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                        return null;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.DOBLE) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return parseFloat((valor_exp1 % valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((valor_exp1 % valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci2 = valor_exp2.charCodeAt(0);
                        return parseFloat((valor_exp1 % num_ascci2).toFixed(2));
                    }
                    else {
                        controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                        return null;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.CARACTER) {
                    var num_ascci1 = valor_exp1.charCodeAt(0);
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return parseFloat((num_ascci1 % valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((num_ascci1 % valor_exp2).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci2 = valor_exp2.charCodeAt(0);
                        return parseFloat((num_ascci1 % num_ascci2).toFixed(2));
                    }
                    else {
                        controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                        return null;
                    }
                }
                else {
                    controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.POT:
                if (tipo_exp1 == Tipo_1.tipo.ENTERO) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return parseFloat((Math.pow(valor_exp1, valor_exp2)).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((Math.pow(valor_exp1, valor_exp2)).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci2 = valor_exp2.charCodeAt(0);
                        return parseFloat((Math.pow(valor_exp1, num_ascci2)).toFixed(2));
                    }
                    else {
                        controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                        return null;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.DOBLE) {
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return parseFloat((Math.pow(valor_exp1, valor_exp2)).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((Math.pow(valor_exp1, valor_exp2)).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci2 = valor_exp2.charCodeAt(0);
                        return parseFloat((Math.pow(valor_exp1, num_ascci2)).toFixed(2));
                    }
                    else {
                        controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                        return null;
                    }
                }
                else if (tipo_exp1 == Tipo_1.tipo.CARACTER) {
                    var num_ascci1 = valor_exp1.charCodeAt(0);
                    if (tipo_exp2 == Tipo_1.tipo.ENTERO) {
                        return parseFloat((Math.pow(num_ascci1, valor_exp2)).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.DOBLE) {
                        return parseFloat((Math.pow(num_ascci1, valor_exp2)).toFixed(2));
                    }
                    else if (tipo_exp2 == Tipo_1.tipo.CARACTER) {
                        var num_ascci2 = valor_exp2.charCodeAt(0);
                        return parseFloat((Math.pow(num_ascci1, num_ascci2)).toFixed(2));
                    }
                    else {
                        controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                        return null;
                    }
                }
                else {
                    controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.UNARIO:
                if (tipo_expU == Tipo_1.tipo.ENTERO || tipo_expU == Tipo_1.tipo.DOBLE) {
                    return -valor_expU;
                }
                else {
                    controlador.errores.push(new Errores_1.default("Semantico", "Incompatibilidad de tipos", this.linea, this.columna));
                    return null;
                }
                break;
            default:
                break;
        }
        return null;
    };
    Aritmetica.prototype.recorrer = function () {
        var padre = new Nodo_1.default("Exp", "");
        if (this.expU) { //-1
            padre.AddHijo(new Nodo_1.default(this.signo_operador, ""));
            padre.AddHijo(this.exp1.recorrer());
        }
        else { // 1+1
            padre.AddHijo(this.exp1.recorrer());
            padre.AddHijo(new Nodo_1.default(this.signo_operador, ""));
            padre.AddHijo(this.exp2.recorrer());
        }
        return padre;
    };
    return Aritmetica;
}(Operacion_1.default));
exports.default = Aritmetica;
