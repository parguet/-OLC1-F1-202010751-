"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Errores_1 = __importDefault(require("../../Ast/Errores"));
var Nodo_1 = __importDefault(require("../../Ast/Nodo"));
var TablaSimbolos_1 = __importDefault(require("../../TablaSimbolos/TablaSimbolos"));
var Break_1 = __importDefault(require("../SentenciasTransferencia/Break"));
var Switch = /** @class */ (function () {
    function Switch(condicion, lista_casos, ist_default, linea, column) {
        this.condicion = condicion;
        this.lista_casos = lista_casos;
        this.ist_default = ist_default;
        this.linea = linea;
        this.column = column;
    }
    Switch.prototype.ejecutar = function (controlador, ts) {
        //switch (1){ 
        // case 1: 
        //print("es uno");
        //break;
        // case 2: 
        //print("es dos"); 
        //default: 
        //print("default");
        //}
        console.log("sadsdasdsadsad");
        console.log(this.condicion);
        var ts_local = new TablaSimbolos_1.default(ts, ts.name);
        // Manejamos 2 banderas 
        var bandera_break = false; // nos indica cuando dentro de un caso vino la sentencia break
        var bandera_entro_caso = false; // nos indica cuando paso las validaciones y entro a ejecutar las instrucciones de un caso
        //la bandera si entro al caso es necesaria ya que si entramos a ejecutar un caso y no tiene un break continua ejecutando los siguientes casos hasta encontrar un break
        for (var _i = 0, _a = this.lista_casos; _i < _a.length; _i++) {
            var caso = _a[_i];
            if (this.condicion.getTipo(controlador, ts) == caso.valor.getTipo(controlador, ts)) {
                //Validamos si la condicion tiene el mismo valor del caso y si no es el mismo valor validamos si ya entro a ejecutar un caso
                if (this.condicion.getValor(controlador, ts) == caso.valor.getValor(controlador, ts) || bandera_entro_caso) {
                    bandera_entro_caso = true; //indicamos que entro a ejecutar un caso
                    var res = caso.ejecutar(controlador, ts_local);
                    if (res instanceof Break_1.default) {
                        console.log("Cometi un error");
                        bandera_break = true;
                        return null;
                    }
                }
            }
            else {
                controlador.errores.push(new Errores_1.default("Semantico", "no se esperaba este simbolo", this.linea, this.column));
                //error
            }
        }
        if (!bandera_break && this.ist_default != null) {
            var res = this.ist_default.ejecutar(controlador, ts_local);
            if (res instanceof Break_1.default) {
                console.log("Cometi un error x2");
                bandera_break = true;
                return null;
            }
        }
    };
    Switch.prototype.recorrer = function () {
        var padre = new Nodo_1.default("Instruccion", "");
        var switch_var = new Nodo_1.default("Switch", "");
        switch_var.AddHijo(this.condicion.recorrer());
        padre.AddHijo(switch_var);
        for (var _i = 0, _a = this.lista_casos; _i < _a.length; _i++) {
            var caso = _a[_i];
            padre.AddHijo(caso.recorrer());
        }
        if (this.ist_default != null) {
            var default_nodo = new Nodo_1.default("Deafault", "");
            default_nodo.AddHijo(this.ist_default.recorrer());
            padre.AddHijo(default_nodo);
        }
        return padre;
    };
    return Switch;
}());
exports.default = Switch;
