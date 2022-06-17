"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Asignacion_1 = __importDefault(require("../Instrucciones/Asignacion"));
var Declaracion_1 = __importDefault(require("../Instrucciones/Declaracion"));
var Funcion_1 = __importDefault(require("../Instrucciones/Funcion"));
var StartWith_1 = __importDefault(require("../Instrucciones/StartWith"));
var Nodo_1 = __importDefault(require("./Nodo"));
var Ast = /** @class */ (function () {
    function Ast(lista_instruciones) {
        this.lista_instrucciones = lista_instruciones;
    }
    Ast.prototype.ejecutar = function (controlador, ts) {
        //1era pasada vamos a guardar las funciones y metodos del programa
        for (var _i = 0, _a = this.lista_instrucciones; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            if (instruccion instanceof Funcion_1.default) {
                var funcion = instruccion;
                funcion.agregarFuncionTS(ts);
            }
        }
        //2 da pasada. ejecutar las declaraciones de variables
        for (var _b = 0, _c = this.lista_instrucciones; _b < _c.length; _b++) {
            var instruccion = _c[_b];
            if (instruccion instanceof Declaracion_1.default || instruccion instanceof Asignacion_1.default) {
                //if(instruccion instanceof Declaracion ){
                instruccion.ejecutar(controlador, ts);
            }
        }
        //3ra pada. ejecutamos todas las demas instrucciones
        for (var _d = 0, _e = this.lista_instrucciones; _d < _e.length; _d++) {
            var instruccion = _e[_d];
            if (instruccion instanceof StartWith_1.default) {
                instruccion.ejecutar(controlador, ts);
                break;
            }
        }
        for (var _f = 0, _g = this.lista_instrucciones; _f < _g.length; _f++) {
            var instruccion = _g[_f];
            if (!(instruccion instanceof Declaracion_1.default) && !(instruccion instanceof Funcion_1.default) && !(instruccion instanceof StartWith_1.default)) {
                instruccion.ejecutar(controlador, ts);
            }
        }
    };
    Ast.prototype.recorrer = function () {
        var raiz = new Nodo_1.default("INICIO", "");
        for (var _i = 0, _a = this.lista_instrucciones; _i < _a.length; _i++) {
            var inst = _a[_i];
            raiz.AddHijo(inst.recorrer());
        }
        return raiz;
    };
    return Ast;
}());
exports.default = Ast;
