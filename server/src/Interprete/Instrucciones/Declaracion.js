"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Errores_1 = __importDefault(require("../Ast/Errores"));
var Nodo_1 = __importDefault(require("../Ast/Nodo"));
var Primitivo_1 = __importDefault(require("../Expresiones/Primitivo"));
var Simbolo_1 = __importDefault(require("../TablaSimbolos/Simbolo"));
var Tipo_1 = require("../TablaSimbolos/Tipo");
var Declaracion = /** @class */ (function () {
    function Declaracion(type, lista_ids, expresion, linea, columna, typeArray, E1, E2, Array, constante) {
        this.type = type;
        this.lista_ids = lista_ids;
        this.expresion = expresion;
        this.linea = linea;
        this.columna = columna;
        this.E1 = E1;
        this.E2 = E2;
        this.typeArray = typeArray;
        this.Array = Array;
        this.constante = constante;
    }
    Declaracion.prototype.ejecutar = function (controlador, ts) {
        // int x, y, z = 0;
        // int a = 9;
        // boolean verdadero;
        for (var _i = 0, _a = this.lista_ids; _i < _a.length; _i++) {
            var id = _a[_i];
            //1er paso. verificar si existe en la tabla de simbolos actual
            if (ts.existeEnActual(id)) {
                var error = new Errores_1.default("Semantico", "La variable ".concat(id, " ya existe en el entorno actual, por lo que no se puede declarar."), this.linea, this.columna);
                controlador.errores.push(error);
                controlador.append(" *** ERROR: Semantico, La variable ".concat(id, " ya existe en el entorno actual, por lo que no se puede declarar. En la linea ").concat(this.linea, " y columna ").concat(this.columna));
                continue;
            }
            //console.log(this)
            //console.log("----------------------------")
            //console.log( this.type.enum_tipo);
            if (this.E1 == null) {
                if (this.expresion != null) {
                    var tipo_valor = this.expresion.getTipo(controlador, ts); //ENTERO
                    var valor = this.expresion.getValor(controlador, ts); //0
                    //console.log(this)
                    //console.log("----------------------------")
                    //console.log( this.type.enum_tipo);
                    //console.log(tipo_valor);
                    //console.log(valor);
                    if (tipo_valor == this.type.enum_tipo) {
                        var nuevo_simbolo = new Simbolo_1.default(1, this.type, id, valor, this.linea, this.columna);
                        ts.agregar(id, nuevo_simbolo);
                    }
                    else {
                        //Tomar en cuenta casteos implicitos
                        if (this.type.enum_tipo == Tipo_1.tipo.DOBLE && tipo_valor == Tipo_1.tipo.ENTERO) {
                            var nuevo_simbolo = new Simbolo_1.default(1, this.type, id, valor, this.linea, this.columna);
                            ts.agregar(id, nuevo_simbolo);
                        }
                        else if (this.type.enum_tipo == Tipo_1.tipo.ENTERO && tipo_valor == Tipo_1.tipo.DOBLE) {
                            var nuevo_simbolo = new Simbolo_1.default(1, this.type, id, Math.trunc(valor), this.linea, this.columna);
                            ts.agregar(id, nuevo_simbolo); // int x = 9.7; -> x = 9
                        }
                        else {
                            //reportar error semantico 
                        }
                    }
                }
                else {
                    var nuevo_simbolo = new Simbolo_1.default(1, this.type, id, null, this.linea, this.columna);
                    ts.agregar(id, nuevo_simbolo);
                    if (this.type.enum_tipo == Tipo_1.tipo.ENTERO) {
                        nuevo_simbolo.setValor(0);
                    }
                    else if (this.type.enum_tipo == Tipo_1.tipo.DOBLE) {
                        nuevo_simbolo.setValor(0.0);
                    }
                    else if (this.type.enum_tipo == Tipo_1.tipo.BOOLEANO) {
                        nuevo_simbolo.setValor(true);
                    }
                    else if (this.type.enum_tipo == Tipo_1.tipo.CADENA) {
                        nuevo_simbolo.setValor("");
                    }
                    else if (this.type.enum_tipo == Tipo_1.tipo.CARACTER) {
                        nuevo_simbolo.setValor('0');
                    }
                }
            }
            else {
                if (this.E2 == null) {
                    var tipo_valor = this.E1.getTipo(controlador, ts); //ENTERO
                    var valor = this.E1.getValor(controlador, ts); //0
                    // console.log(this)
                    //console.log("----------------------------")
                    //console.log( this.type.enum_tipo);
                    //console.log(tipo_valor);
                    //console.log(valor);
                    //console.log(new Array(valor));
                    var valores = new Array(valor);
                    var nuevo_simbolo = new Simbolo_1.default(4, this.type, id, valores, this.linea, this.columna);
                    ts.agregar(id, nuevo_simbolo);
                }
                else {
                    var global_1 = new Array();
                    var i = 1;
                    var j = 1;
                    for (var _b = 0, _c = this.Array; _b < _c.length; _b++) {
                        var obj = _c[_b];
                        var temp = new Array();
                        for (var _d = 0, obj_1 = obj; _d < obj_1.length; _d++) {
                            var oj = obj_1[_d];
                            if (!(oj instanceof Primitivo_1.default)) {
                                temp.push(oj);
                            }
                            else {
                                temp.push(oj.getValor(controlador, ts));
                            }
                        }
                        global_1.push(temp);
                    }
                    //var probandp = global.toString()
                    //console.log(probandp)
                    console.log(global_1[3]);
                    var nuevo_simbolo = new Simbolo_1.default(4, this.type, id, global_1, this.linea, this.columna);
                    ts.agregar(id, nuevo_simbolo);
                }
            }
        }
        return null;
    };
    Declaracion.prototype.recorrer = function () {
        try {
            var padre = new Nodo_1.default("DECLARACION", "");
            padre.AddHijo(new Nodo_1.default(this.type.nombre_tipo, ""));
            var hijos_id = new Nodo_1.default("Ids", "");
            for (var _i = 0, _a = this.lista_ids; _i < _a.length; _i++) {
                var id = _a[_i];
                hijos_id.AddHijo(new Nodo_1.default(id, ""));
            }
            padre.AddHijo(hijos_id);
            if (this.expresion != null) {
                padre.AddHijo(this.expresion.recorrer());
            }
            if (this.E2 != null) {
                var dimension = new Nodo_1.default("Posiciones", "");
                dimension.AddHijo(this.E1.recorrer());
                // let dimension2 = new Nodo("Posiciones","");
                //dimension2.AddHijo(this.E2.recorrer());
                padre.AddHijo(dimension);
                // padre.AddHijo(dimension2);
            }
            else if (this.E1 != null) {
                var dimension = new Nodo_1.default("Posiciones", "");
                dimension.AddHijo(this.E1.recorrer());
                padre.AddHijo(dimension);
            }
            return padre;
        }
        catch (error) {
            var padre = new Nodo_1.default("DECLARACION", "");
            return padre;
        }
    };
    return Declaracion;
}());
exports.default = Declaracion;
