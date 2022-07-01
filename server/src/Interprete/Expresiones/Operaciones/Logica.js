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
var Logica = /** @class */ (function (_super) {
    __extends(Logica, _super);
    /**
     * @constructor este constructor utiliza el mismo de la clase Operacion
     */
    function Logica(exp1, signo_operador, exp2, linea, columna, expU) {
        return _super.call(this, exp1, signo_operador, exp2, linea, columna, expU) || this;
    }
    Logica.prototype.getTipo = function (controlador, ts) {
        var tipo_exp1;
        var tipo_exp2;
        var tipo_expU;
        if (this.expU == false) {
            /** Ejemplo 1
            *  true || flase -> exp1 or exp2 -> exp1 = true, exp2 = false
            *  exp1.getTipo = BOOLEANO
            *  exp2.getTipo = BOOLEANO
            *
            *  Ejemplo 2
            *  false || 5 > 4.9 -> exp1 or exp2 -> exp1 = false, exp2 = 5 > 4.9 ->
            *  exp1.getTipo = BOOLEANO
            *  exp2.getTipo = BOOLEANO
            */
            tipo_exp1 = this.exp1.getTipo(controlador, ts); // BOOLEANO
            tipo_exp2 = this.exp2.getTipo(controlador, ts); // BOOLEANO 
            tipo_expU = Tipo_1.tipo.ERROR;
        }
        else {
            tipo_expU = this.exp1.getTipo(controlador, ts);
            //console.log("PASO 1 -" + tipo_expU + " " + this.exp1.getValor(controlador,ts));
            tipo_exp1 = Tipo_1.tipo.ERROR;
            tipo_exp2 = Tipo_1.tipo.ERROR;
        }
        /** segun el enununciado
         * Se comparan simbolos a nivel logico -> verdadero o falso
         */
        // console.log("valor: " + this.exp1.getValor(controlador,ts));
        if (this.expU == false) {
            if (tipo_exp1 == Tipo_1.tipo.BOOLEANO) {
                if (tipo_exp2 == Tipo_1.tipo.BOOLEANO) {
                    return Tipo_1.tipo.BOOLEANO;
                }
                else {
                    return Tipo_1.tipo.ERROR;
                }
            }
            else {
                return Tipo_1.tipo.ERROR;
            }
        }
        else {
            if (this.operador == Operacion_1.Operador.CHARARRAY || this.operador == Operacion_1.Operador.CASTEOINT || this.operador == Operacion_1.Operador.CASTEODOUBLE || this.operador == Operacion_1.Operador.CASTEOSTRING || this.operador == Operacion_1.Operador.CASTEOCHAR || this.operador == Operacion_1.Operador.CASTEOTIPO || this.operador == Operacion_1.Operador.UPPER || this.operador == Operacion_1.Operador.LOWER || this.operador == Operacion_1.Operador.LENGHT || this.operador == Operacion_1.Operador.ROUND)
                switch (this.operador) {
                    case Operacion_1.Operador.CASTEOINT:
                        return Tipo_1.tipo.ENTERO;
                        break;
                    case Operacion_1.Operador.CASTEODOUBLE:
                        return Tipo_1.tipo.DOBLE;
                        break;
                    case Operacion_1.Operador.CASTEOSTRING:
                        return Tipo_1.tipo.CADENA;
                        break;
                    case Operacion_1.Operador.CASTEOCHAR:
                        return Tipo_1.tipo.CARACTER;
                        break;
                    case Operacion_1.Operador.CASTEOTIPO:
                        return Tipo_1.tipo.CADENA;
                        break;
                    case Operacion_1.Operador.UPPER:
                        return Tipo_1.tipo.CADENA;
                        break;
                    case Operacion_1.Operador.LOWER:
                        return Tipo_1.tipo.CADENA;
                        break;
                    case Operacion_1.Operador.LENGHT:
                        return Tipo_1.tipo.ENTERO;
                        break;
                    case Operacion_1.Operador.ROUND:
                        return Tipo_1.tipo.ENTERO;
                        break;
                    case Operacion_1.Operador.CHARARRAY:
                        return Tipo_1.tipo.CARACTER;
                        break;
                    default:
                        return Tipo_1.tipo.ERROR;
                        break;
                }
            else {
                if (tipo_expU == Tipo_1.tipo.BOOLEANO) {
                    return Tipo_1.tipo.BOOLEANO;
                }
                else {
                    return Tipo_1.tipo.ERROR;
                }
            }
        }
        return Tipo_1.tipo.ERROR;
    };
    Logica.prototype.getValor = function (controlador, ts) {
        var valor_exp1;
        var valor_exp2;
        var valor_expU;
        var tipo_exp1;
        var tipo_exp2;
        var tipo_expU;
        if (this.expU == false) {
            /**
            *  Ejemplo
            *  false || 5 > 4.9 -> exp1 or exp2 -> exp1 = false, exp2 = 5 > 4.9 = true
            *  exp1.getTipo = BOOLEANO
            *  exp2.getTipo = BOOLEANO
            */
            tipo_exp1 = this.exp1.getTipo(controlador, ts); // BOOLEANO
            tipo_exp2 = this.exp2.getTipo(controlador, ts); // BOOLEANO 
            tipo_expU = Tipo_1.tipo.ERROR;
            valor_exp1 = this.exp1.getValor(controlador, ts); // false 
            valor_exp2 = this.exp2.getValor(controlador, ts); // true
        }
        else {
            /**
             * Ejemplo
             * !(9 > 10) -> !exp1 = exp1 = (9>10) = false
             */
            tipo_expU = this.exp1.getTipo(controlador, ts); // BOOLEANO
            tipo_exp1 = Tipo_1.tipo.ERROR;
            tipo_exp2 = Tipo_1.tipo.ERROR;
            valor_expU = this.exp1.getValor(controlador, ts); // false
        }
        //console.log("--------------------LLEGO---------------------------------")
        //console.log(this.operador)
        switch (this.operador) {
            case Operacion_1.Operador.AND:
                if (tipo_exp1 == Tipo_1.tipo.BOOLEANO) {
                    if (tipo_exp2 == Tipo_1.tipo.BOOLEANO) {
                        return valor_exp1 && valor_exp2;
                    }
                    else {
                        var error = new Errores_1.default("Semantico", "Incompatibilidad de tipos, no se puede realizar la operacion logica AND.", this.linea, this.columna);
                        controlador.errores.push(error);
                        controlador.append(" *** ERROR: Semantico, Incompatibilidad de tipos, no se puede realizar la operacion logica AND. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                        return null;
                    }
                }
                else {
                    var error = new Errores_1.default("Semantico", "Incompatibilidad de tipos, no se puede realizar la operacion logica AND ya que solo se permiten valores booleanos.", this.linea, this.columna);
                    controlador.errores.push(error);
                    controlador.append(" *** ERROR: Semantico, Incompatibilidad de tipos, no se puede realizar la operacion logica AND ya que solo se permiten valores booleano. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.OR:
                if (tipo_exp1 == Tipo_1.tipo.BOOLEANO) {
                    if (tipo_exp2 == Tipo_1.tipo.BOOLEANO) {
                        return valor_exp1 || valor_exp2;
                    }
                    else {
                        var error = new Errores_1.default("Semantico", "Incompatibilidad de tipos, no se puede realizar la operacion logica OR.", this.linea, this.columna);
                        controlador.errores.push(error);
                        controlador.append(" *** ERROR: Semantico, Incompatibilidad de tipos, no se puede realizar la operacion logica OR. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                        return null;
                    }
                }
                else {
                    var error = new Errores_1.default("Semantico", "Incompatibilidad de tipos, no se puede realizar la operacion logica OR ya que solo se permiten valores booleanos.", this.linea, this.columna);
                    controlador.errores.push(error);
                    controlador.append(" *** ERROR: Semantico, Incompatibilidad de tipos, no se puede realizar la operacion logica OR ya que solo se permiten valores booleano. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.XOR:
                if (tipo_exp1 == Tipo_1.tipo.BOOLEANO) {
                    if (tipo_exp2 == Tipo_1.tipo.BOOLEANO) {
                        console.log(!!valor_exp1 !== !!valor_exp2);
                        return !!valor_exp1 !== !!valor_exp2;
                    }
                    else {
                        var error = new Errores_1.default("Semantico", "Incompatibilidad de tipos, no se puede realizar la operacion logica XOR.", this.linea, this.columna);
                        controlador.errores.push(error);
                        controlador.append(" *** ERROR: Semantico, Incompatibilidad de tipos, no se puede realizar la operacion logica XOR. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                        return null;
                    }
                }
                else {
                    var error = new Errores_1.default("Semantico", "Incompatibilidad de tipos, no se puede realizar la operacion logica XOR ya que solo se permiten valores booleanos.", this.linea, this.columna);
                    controlador.errores.push(error);
                    controlador.append(" *** ERROR: Semantico, Incompatibilidad de tipos, no se puede realizar la operacion logica XOR ya que solo se permiten valores booleano. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.NOT:
                if (tipo_expU == Tipo_1.tipo.BOOLEANO) {
                    return !valor_expU;
                }
                else {
                    var error = new Errores_1.default("Semantico", "No se puede realizar la operacion logica NOT, ya que solo se permiten valores booleano.", this.linea, this.columna);
                    controlador.errores.push(error);
                    controlador.append(" *** ERROR: Semantico, No se puede realizar la operacion logica NOT, ya que solo se permiten valores booleano. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.CASTEOINT:
                if (tipo_expU == Tipo_1.tipo.CARACTER || tipo_expU == Tipo_1.tipo.DOBLE) {
                    if (tipo_expU == Tipo_1.tipo.CARACTER) {
                        return valor_expU.charCodeAt(0);
                        ;
                    }
                    else {
                        return valor_expU | 0;
                    }
                }
                else {
                    var error = new Errores_1.default("Semantico", "No se puede realizar la operacion de casteo int", this.linea, this.columna);
                    controlador.errores.push(error);
                    controlador.append(" *** ERROR: Semantico, No se puede realizar la operacion logica NOT, ya que solo se permiten valores booleano. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.CASTEODOUBLE:
                if (tipo_expU == Tipo_1.tipo.CARACTER || tipo_expU == Tipo_1.tipo.ENTERO) {
                    if (tipo_expU == Tipo_1.tipo.CARACTER) {
                        var temporal = valor_expU.charCodeAt(0);
                        return (temporal);
                    }
                    else {
                        return (valor_expU);
                    }
                }
                else {
                    var error = new Errores_1.default("Semantico", "No se puede realizar el cateo de double", this.linea, this.columna);
                    controlador.errores.push(error);
                    controlador.append(" *** ERROR: Semantico, No se puede realizar la operacion logica NOT, ya que solo se permiten valores booleano. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.CASTEOSTRING:
                if (tipo_expU == Tipo_1.tipo.ENTERO || tipo_expU == Tipo_1.tipo.DOBLE || tipo_expU == Tipo_1.tipo.BOOLEANO) {
                    return valor_expU.toString();
                }
                else {
                    var error = new Errores_1.default("Semantico", "No se puede realizar el casteo de string", this.linea, this.columna);
                    controlador.errores.push(error);
                    controlador.append(" *** ERROR: Semantico, No se puede realizar la operacion logica NOT, ya que solo se permiten valores booleano. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.CASTEOCHAR:
                if (tipo_expU == Tipo_1.tipo.ENTERO) {
                    tipo_expU = Tipo_1.tipo.CARACTER;
                    return String.fromCharCode(valor_expU);
                }
                else {
                    var error = new Errores_1.default("Semantico", "No se puede realizar la operacion casteo char", this.linea, this.columna);
                    controlador.errores.push(error);
                    controlador.append(" *** ERROR: Semantico, No se puede realizar la operacion logica NOT, ya que solo se permiten valores booleano. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.CASTEOTIPO:
                try {
                    if (tipo_expU == Tipo_1.tipo.ENTERO) {
                        return "Int";
                    }
                    else if (tipo_expU == Tipo_1.tipo.DOBLE) {
                        return "Double";
                    }
                    else if (tipo_expU == Tipo_1.tipo.BOOLEANO) {
                        return "Boolean";
                    }
                    else if (tipo_expU == Tipo_1.tipo.CARACTER) {
                        return "Char";
                    }
                    else if (tipo_expU == Tipo_1.tipo.CADENA) {
                        return "String";
                    }
                    else {
                        var error = new Errores_1.default("Semantico", "No se puede realizar la operacion de obtner tipo", this.linea, this.columna);
                        controlador.errores.push(error);
                        controlador.append(" *** ERROR: Semantico, No se puede realizar la operacion logica NOT, ya que solo se permiten valores booleano. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                        return null;
                    }
                }
                catch (errror) {
                    var error = new Errores_1.default("Semantico", "No se esperaba este simbolo", this.linea, this.columna);
                    controlador.errores.push(error);
                    controlador.append(" *** ERROR: Semantico, No se puede realizar la operacion logica NOT, ya que solo se permiten valores booleano. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.UPPER:
                try {
                    return valor_expU.toUpperCase();
                }
                catch (errror) {
                    var error = new Errores_1.default("Semantico", "No se puede realizar la operacion UPPER", this.linea, this.columna);
                    controlador.errores.push(error);
                    controlador.append(" *** ERROR: Semantico, No se puede realizar la operacion logica NOT, ya que solo se permiten valores booleano. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.LOWER:
                try {
                    return valor_expU.toLowerCase();
                }
                catch (errror) {
                    var error = new Errores_1.default("Semantico", "No se puede realizar la operacion LOWER", this.linea, this.columna);
                    controlador.errores.push(error);
                    controlador.append(" *** ERROR: Semantico, No se puede realizar la operacion logica NOT, ya que solo se permiten valores booleano. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                    return null;
                }
                break;
            case Operacion_1.Operador.LENGHT:
                // if(tipo_expU == tipo.CADENA ){
                if (true) {
                    return valor_expU.length;
                }
                else {
                    var error = new Errores_1.default("Semantico", "No se puede realizar la operacion logica NOT, ya que solo se permiten valores booleano.", this.linea, this.columna);
                    controlador.errores.push(error);
                    controlador.append(" *** ERROR: Semantico, No se puede realizar la operacion logica NOT, ya que solo se permiten valores booleano. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                    return null;
                }
            case Operacion_1.Operador.ROUND:
                if (tipo_expU == Tipo_1.tipo.ENTERO || tipo_expU == Tipo_1.tipo.DOBLE) {
                    return Math.round(valor_expU);
                }
                else {
                    var error = new Errores_1.default("Semantico", "No se puede realizar la operacion round", this.linea, this.columna);
                    controlador.errores.push(error);
                    controlador.append(" *** ERROR: Semantico, No se puede realizar la operacion logica NOT, ya que solo se permiten valores booleano. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                    return null;
                }
            case Operacion_1.Operador.CHARARRAY:
                if (tipo_expU == Tipo_1.tipo.CADENA) {
                    return Array.from(valor_expU);
                }
                else {
                    var error = new Errores_1.default("Semantico", "No se puede realizar la operacion tocharr array", this.linea, this.columna);
                    controlador.errores.push(error);
                    controlador.append(" *** ERROR: Semantico, No se puede realizar la operacion logica NOT, ya que solo se permiten valores booleano. En la linea ".concat(this.linea, " y columna ").concat(this.columna));
                    return null;
                }
        }
    };
    Logica.prototype.recorrer = function () {
        //console.log("-----PRIMERO------")
        //console.log(this)
        var padre = new Nodo_1.default("Condicion", "");
        var expre1_nodo;
        if (this.exp1 != null) {
            expre1_nodo = this.exp1.recorrer();
        }
        var expre2_nodo;
        if (this.exp2 != null) {
            expre2_nodo = this.exp2.recorrer();
        }
        if (this.signo_operador == '!') {
            padre.AddHijo(new Nodo_1.default(this.signo_operador, ""));
            padre.AddHijo(expre1_nodo);
        }
        else if (this.signo_operador == '(int)') {
            padre.AddHijo(new Nodo_1.default(this.signo_operador, ""));
            padre.AddHijo(expre1_nodo);
        }
        else if (this.signo_operador == '(double)') {
            padre.AddHijo(new Nodo_1.default(this.signo_operador, ""));
            padre.AddHijo(expre1_nodo);
        }
        else if (this.signo_operador == '(char)') {
            padre.AddHijo(new Nodo_1.default(this.signo_operador, ""));
            padre.AddHijo(expre1_nodo);
        }
        else if (this.signo_operador == '(string)') {
            padre.AddHijo(new Nodo_1.default("toString", ""));
            padre.AddHijo(expre1_nodo);
        }
        else if (this.signo_operador == '(tipo)') {
            padre.AddHijo(new Nodo_1.default("typeof", ""));
            padre.AddHijo(expre1_nodo);
        }
        else if (this.signo_operador == '(lower)') {
            padre.AddHijo(new Nodo_1.default("toLower", ""));
            padre.AddHijo(expre1_nodo);
        }
        else if (this.signo_operador == '(upper)') {
            padre.AddHijo(new Nodo_1.default("toUpper", ""));
            padre.AddHijo(expre1_nodo);
        }
        else if (this.signo_operador == '(length)') {
            padre.AddHijo(new Nodo_1.default('length', ""));
            padre.AddHijo(expre1_nodo);
        }
        else if (this.signo_operador == '(round)') {
            padre.AddHijo(new Nodo_1.default('round', ""));
            padre.AddHijo(expre1_nodo);
        }
        else if (this.signo_operador == '(chararray)') {
            padre.AddHijo(new Nodo_1.default('chararray', ""));
        }
        else {
            padre.AddHijo(expre1_nodo);
            padre.AddHijo(new Nodo_1.default(this.signo_operador, ""));
            padre.AddHijo(expre2_nodo);
        }
        return padre;
    };
    return Logica;
}(Operacion_1.default));
exports.default = Logica;
