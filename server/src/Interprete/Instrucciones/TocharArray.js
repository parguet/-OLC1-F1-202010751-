"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Errores_1 = __importDefault(require("../Ast/Errores"));
var Nodo_1 = __importDefault(require("../Ast/Nodo"));
var Simbolo_1 = __importDefault(require("../TablaSimbolos/Simbolo"));
var Tipo_1 = require("../TablaSimbolos/Tipo");
var TocharArray = /** @class */ (function () {
    function TocharArray(type, id, expresion, linea, columna) {
        this.type = type;
        this.id = id;
        this.expresion = expresion;
        this.linea = linea;
        this.columna = columna;
    }
    TocharArray.prototype.ejecutar = function (controlador, ts) {
        if (!ts.existeEnActual(this.id)) {
            if (this.type.gettipo() == Tipo_1.tipo.CARACTER) {
                if (this.expresion.getTipo(controlador, ts) == Tipo_1.tipo.CADENA) {
                    var exp = this.expresion.getValor(controlador, ts);
                    var vector = [];
                    for (var i = 0; i < exp.length; i++) {
                        vector.push(exp[i]);
                    }
                    var nuevo_simbolo = new Simbolo_1.default(4, this.type, this.id, vector, this.linea, this.columna);
                    ts.agregar(this.id, nuevo_simbolo);
                }
                else {
                    var error = new Errores_1.default("Semantico", "To char array solo acepta cadenas", this.linea, this.columna);
                    controlador.errores.push(error);
                }
            }
            else {
                var error = new Errores_1.default("Semantico", "El tipo no es char", this.linea, this.columna);
                controlador.errores.push(error);
            }
        }
        else {
            var error = new Errores_1.default("Semantico", "La variable ".concat(this.id, " ya existe en el entorno actual, por lo que no se puede declarar."), this.linea, this.columna);
            controlador.errores.push(error);
        }
    };
    TocharArray.prototype.recorrer = function () {
        var padre = new Nodo_1.default("tocharArray", "");
        return padre;
    };
    return TocharArray;
}());
exports.default = TocharArray;
