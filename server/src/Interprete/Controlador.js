"use strict";
/**
 * @class Clase que nos permitira llevar el control de errores y la consola de todo el programa.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Controlador = /** @class */ (function () {
    function Controlador() {
        this.errores = new Array();
        this.consola = "";
        this.sent_ciclica = false;
    }
    Controlador.prototype.obtenererrores = function () {
        var TextSalida = "";
        for (var _i = 0, _a = this.errores; _i < _a.length; _i++) {
            var error = _a[_i];
            TextSalida += error.tipo + "," + error.descripcion + "," + error.linea + "," + error.columna;
            TextSalida += '~';
        }
        return TextSalida;
    };
    Controlador.prototype.print = function (cadena, tipo) {
        if (tipo) {
            this.consola = this.consola + cadena + " \r\n ";
        }
        else {
            this.consola = this.consola + cadena;
        }
    };
    Controlador.prototype.append = function (cadena) {
        this.consola = this.consola + cadena + " \r\n ";
    };
    /**
     * @function graficar_ts funcion para graficar la tabla de simbolos
     * @param controlador lleva el control del programa
     * @param ts accede a la tabla de simbolos
     * @returns retorna el cuerpo de la tabla de simbolos de html
     */
    Controlador.prototype.graficar_ts = function (controlador, ts) {
        var _this = this;
        var TextSalida = "";
        //console.log("------------------------------------------------------------------")
        while (ts != null) {
            //console.log(ts)
            ts.tabla.forEach(function (sim, key) {
                TextSalida += _this.getRol(sim) + "," + sim.identificador + "," + _this.getTipo(sim) + "," + _this.getAmbito(ts) + "," + _this.getValor(sim) + "," + _this.parametros(sim) + "," + sim.linea + "," + sim.columna;
                TextSalida += '~';
            });
            ts = ts.sig;
        }
        //console.log(TextSalida)
        return TextSalida;
    };
    /**
     * @function getValor obtiene el valor del simbolo de la tabla
     * @param sim simbolo de la tabla
     * @returns retorna el valor del simbolo
     */
    Controlador.prototype.getValor = function (sim) {
        if (sim.valor != null) {
            return sim.valor.toString();
        }
        else {
            return '...';
        }
    };
    /**
     * @function getTipo obtiene el tipo del simbolo de la tabla
     * @param sim  simbolo de la tabla
     * @returns retorna el tipo del simbolo
     */
    Controlador.prototype.getTipo = function (sim) {
        try {
            return sim.tipo.nombre_tipo.toLowerCase();
        }
        catch (error) {
            return sim.tipo.toString();
        }
    };
    /**
     * @function getTipo obtiene el rol del simbolo de la tabla
     * @param sim  simbolo de la tabla
     * @returns retorna el rol del simbolo
     */
    Controlador.prototype.getRol = function (sim) {
        var rol = '';
        switch (sim.simbolo) {
            case 1:
                rol = "variable";
                break;
            case 2:
                rol = "funcion";
                break;
            case 3:
                rol = "metodo";
                break;
            case 4:
                rol = "vector";
                break;
            case 5:
                rol = "lista";
                break;
            case 6:
                rol = "parametro";
                break;
        }
        return rol;
    };
    /**
    * @function getTipo Le indicamos el ambito del simbolo
    * @returns retorna el ambito del simbolo
    */
    Controlador.prototype.getAmbito = function (ts) {
        if (ts.name != null) {
            return ts.name;
        }
        return 'global';
    };
    /**
    * @function getTipo obtiene la cantidad de parametros del simbolo de la tabla
    * @param sim  simbolo de la tabla
    * @returns retorna la cantidad de parametros del simbolo si es que tiene
    */
    Controlador.prototype.parametros = function (sim) {
        if (sim.lista_params != undefined) {
            return sim.lista_params.length;
        }
        else {
            return "...";
        }
    };
    return Controlador;
}());
exports.default = Controlador;
