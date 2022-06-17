"use strict";
/**
 * @class Tabla de Simbolos esta clase guarda la tabla de simbolos del programa, es decir,
 * guarda las variables, metodos y funciones
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var TablaSimbolos = /** @class */ (function () {
    /**
     * @constructor creamos una nueva tabla.
     * @param ant indica quien es la tabla de simbolos anterior de la nueva tabla (para el manejo de ambitos)
     */
    function TablaSimbolos(ant, name) {
        this.ant = ant;
        this.tabla = new Map();
        if (ant != null) {
            ant.sig = this;
        }
        this.name = name;
    }
    TablaSimbolos.prototype.agregar = function (id, simbolo) {
        this.tabla.set(id.toLowerCase(), simbolo); // Lo convertimos en minuscula ya que nuestro lenguaje es caseinsitive ej. variable = VARiabLE
    };
    TablaSimbolos.prototype.existe = function (id) {
        var ts = this;
        while (ts != null) {
            var existe = ts.tabla.get(id.toLowerCase());
            if (existe != null) {
                return true;
            }
            ts = ts.ant;
        }
        return false;
    };
    TablaSimbolos.prototype.getSimbolo = function (id) {
        var ts = this;
        while (ts != null) {
            var existe = ts.tabla.get(id.toLowerCase());
            if (existe != null) {
                return existe;
            }
            ts = ts.ant;
        }
        return null;
    };
    TablaSimbolos.prototype.existeEnActual = function (id) {
        var ts = this;
        var existe = ts.tabla.get(id.toLowerCase());
        if (existe != null) {
            return true;
        }
        return false;
    };
    return TablaSimbolos;
}());
exports.default = TablaSimbolos;
