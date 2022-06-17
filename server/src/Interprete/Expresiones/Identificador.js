"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Errores_1 = __importDefault(require("../Ast/Errores"));
var Nodo_1 = __importDefault(require("../Ast/Nodo"));
var Tipo_1 = require("../TablaSimbolos/Tipo");
var Identificador = /** @class */ (function () {
    function Identificador(identifador, linea, columna, I1, I2) {
        this.identificador = identifador;
        this.linea = linea;
        this.columna = columna;
        this.I1 = I1;
        this.I2 = I2;
    }
    //writeline(x)
    Identificador.prototype.getTipo = function (controlador, ts) {
        var existe_id = ts.getSimbolo(this.identificador);
        if (existe_id != null) {
            return existe_id.tipo.enum_tipo;
        }
        else {
            return Tipo_1.tipo.ERROR;
        }
    };
    Identificador.prototype.getValor = function (controlador, ts) {
        var existe_id = ts.getSimbolo(this.identificador);
        //console.log("TRTANDO DE RECUPERAR")
        //console.log(existe_id?.valor)
        if (existe_id != null) {
            if (this.I2 != null) {
                var indice1 = this.I1.getValor(controlador, ts);
                var indice2 = this.I2.getValor(controlador, ts);
                if (existe_id.valor[indice1][indice2] == undefined) {
                    controlador.errores.push(new Errores_1.default("Semantico", "Indice fuera del tama\u00F1o del arreglo", this.linea, this.columna));
                    return "*Error indice: " + [indice1] + " fuera de los parametros";
                }
                return existe_id.valor[indice1][indice2];
            }
            else if (this.I1 != null) {
                // console.log("TRTANDO DE RECUPERAR")
                var indice1 = this.I1.getValor(controlador, ts);
                if (existe_id.valor[indice1] == undefined) {
                    controlador.errores.push(new Errores_1.default("Semantico", "Indice fuera del tama\u00F1o del arreglo", this.linea, this.columna));
                    return "*Error indice: " + [indice1] + " fuera de los parametros";
                }
                return existe_id.valor[indice1];
            }
            else {
                // console.log("RETORNANDO")
                // console.log(existe_id.valor)
                return existe_id.valor;
            }
        }
        else {
            controlador.errores.push(new Errores_1.default("Semantico", "No se encontro dato", this.linea, this.columna));
            // reportar error semantico
            return null;
        }
    };
    Identificador.prototype.recorrer = function () {
        var padre = new Nodo_1.default("Identificador", "");
        padre.AddHijo(new Nodo_1.default(this.identificador, ""));
        return padre;
    };
    return Identificador;
}());
exports.default = Identificador;
