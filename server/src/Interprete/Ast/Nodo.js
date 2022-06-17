"use strict";
/**
 * @class Clase para el manejo de nodos de la grafica del ast
 * Los metodos los implementaremos mas adelante
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Nodo = /** @class */ (function () {
    /**
     * @constructor Crea un nuevo nodo a graficar del ast
     * @param token guarda el token del nodo
     * @param lexema guarda el lexema del nodo
     */
    function Nodo(token, lexema) {
        this.token = token;
        this.lexema = lexema;
        this.hijos = new Array();
    }
    /**
     * @method AddHijo agrega un nuevo hijo a la lista
     * @param nuevo hace referencia al nuevo nodo
     */
    Nodo.prototype.AddHijo = function (nuevo) {
        this.hijos.push(nuevo);
    };
    /**
     * @function getToken retorna el nombre del token
     * @returns retorna el token
     */
    Nodo.prototype.getToken = function () {
        return this.token;
    };
    /**
     * @function GraficarSintactico Hace la estructura de la grafica
     * @returns retorna la cadena total de la grafica
     */
    Nodo.prototype.GraficarSintactico = function () {
        var grafica = "digraph {\n\n".concat(this.GraficarNodos(this, "0"), " \n\n}");
        return grafica;
    };
    /**
     * @function GraficarNodos
     * @param nodo indica el nodo donde nos posicionamos
     * @param i hara referencia al numero o identificador del nodo a graficar
     * @returns retorna la cadena de los nodos
     */
    Nodo.prototype.GraficarNodos = function (nodo, i) {
        var k = 0;
        var r = "";
        var nodoTerm = nodo.token;
        nodoTerm = nodoTerm.replace("\"", "");
        r = "node".concat(i, "[label = \"").concat(nodoTerm, "\"];\n");
        for (var j = 0; j <= nodo.hijos.length - 1; j++) {
            r = "".concat(r, "node").concat(i, " -> node").concat(i).concat(k, "\n");
            r = r + this.GraficarNodos(nodo.hijos[j], "" + i + k);
            k = k + 1;
        }
        if (!(nodo.lexema.match('')) || !(nodo.lexema.match(""))) {
            var nodoToken = nodo.lexema;
            nodoToken = nodoToken.replace("\"", "");
            r = r + "node".concat(i, "c[label = \"").concat(nodoToken, "\"];\n");
            r = r + "node".concat(i, " -> node").concat(i, "c\n");
        }
        return r;
    };
    return Nodo;
}());
exports.default = Nodo;
