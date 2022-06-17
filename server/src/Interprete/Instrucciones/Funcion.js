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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Nodo_1 = __importDefault(require("../Ast/Nodo"));
var Simbolo_1 = __importDefault(require("../TablaSimbolos/Simbolo"));
var TablaSimbolos_1 = __importDefault(require("../TablaSimbolos/TablaSimbolos"));
var Funcion = /** @class */ (function (_super) {
    __extends(Funcion, _super);
    function Funcion(simbolo, tipo, identificador, lista_params, metodo, lista_instrucciones, linea, columna) {
        var _this = _super.call(this, simbolo, tipo, identificador, null, linea, columna, lista_params, metodo) || this;
        _this.lista_instrucciones = lista_instrucciones;
        _this.linea = linea;
        _this.columna = columna;
        return _this;
    }
    //-- agregamos un metodo para agregar el simbolo de la funcion a la tabla de simbolos
    Funcion.prototype.agregarFuncionTS = function (ts) {
        console.log("guardamos ".concat(this.identificador));
        if (!(ts.existe(this.identificador))) {
            ts.agregar(this.identificador, this);
        }
        else {
            // error semantico.
        }
    };
    Funcion.prototype.ejecutar = function (controlador, ts) {
        // Aqui solo necesitamos mandar a ejecutar las instrucciones ya que las validaciones para llegar hasta aca se hacen en la clase llamada
        var ts_local = new TablaSimbolos_1.default(ts, this.identificador);
        //console.log("estamos en funcion");
        for (var _i = 0, _a = this.lista_instrucciones; _i < _a.length; _i++) {
            var inst = _a[_i];
            var retorno = inst.ejecutar(controlador, ts_local);
            if (retorno != null) {
                return retorno;
            }
        }
        return null;
    };
    Funcion.prototype.recorrer = function () {
        var padre = new Nodo_1.default("Funcion", "");
        try {
            padre.AddHijo(new Nodo_1.default(this.tipo.nombre_tipo.toString(), ""));
        }
        catch (error) {
            padre.AddHijo(new Nodo_1.default(this.tipo.toString(), ""));
        }
        padre.AddHijo(new Nodo_1.default(this.identificador.toString(), ""));
        padre.AddHijo(new Nodo_1.default("(", ""));
        //TODO: AGREGAR NODOS PARAMETROS SOLO SI HAY
        if (this.lista_params != null) {
            //console.log("Lista parametros")
            // console.log(this.lista_params)
            var Parametros = new Nodo_1.default("Parametros", "");
            for (var _i = 0, _a = this.lista_params; _i < _a.length; _i++) {
                var parametro = _a[_i];
                var Tipo_1 = new Nodo_1.default(parametro.tipo.nombre_tipo, "");
                Tipo_1.AddHijo(new Nodo_1.default(parametro.identificador.toString(), ""));
                Parametros.AddHijo(Tipo_1);
            }
            padre.AddHijo(Parametros);
        }
        padre.AddHijo(new Nodo_1.default(")", ""));
        padre.AddHijo(new Nodo_1.default("{", ""));
        var hijo_instrucciones = new Nodo_1.default("Instrucciones", "");
        for (var _b = 0, _c = this.lista_instrucciones; _b < _c.length; _b++) {
            var inst = _c[_b];
            hijo_instrucciones.AddHijo(inst.recorrer());
        }
        padre.AddHijo(hijo_instrucciones);
        padre.AddHijo(new Nodo_1.default("}", ""));
        return padre;
    };
    return Funcion;
}(Simbolo_1.default));
exports.default = Funcion;
