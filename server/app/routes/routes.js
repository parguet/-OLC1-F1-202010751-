"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Controlador_1 = __importDefault(require("../../src/Interprete/Controlador"));
var TablaSimbolos_1 = __importDefault(require("../../src/Interprete/TablaSimbolos/TablaSimbolos"));
var interprete = require('../../src/Analizador/interprete').parser;
var router = express.Router();
router.get('/', function (req, res) {
    res.send('HOLA DESDE EL SERVIDOR DEL INTERPRETE');
});
router.post('/recorrer', function (req, res) {
    try {
        var input = req.body.input;
        console.log(input);
        var ast = interprete.parse(input);
        var nodo_ast = ast.recorrer();
        var grafo = nodo_ast.GraficarSintactico(); //Aqui tenemos la cadena de graphviz para graficar
        res.status(200).json({ ast: grafo });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ ast: "Se ha producido un error" });
    }
});
router.post('/ejecutar', function (req, res) {
    try {
        var input = req.body.input;
        var ast = interprete.parse(input);
        var respuesta = "";
        var controlador = new Controlador_1.default();
        var ts_global = new TablaSimbolos_1.default(null);
        ast.ejecutar(controlador, ts_global);
        var ts_html = controlador.graficar_ts(controlador, ts_global);
        var ts_html_error = controlador.obtenererrores();
        /* for(let evaluar of arreglo){
             let valor = evaluar.expresion.getValor(controlador,ts_global);
 
             if(valor != null){
                 console.log(`El valor de la expresion es : ${valor}`);
                 respuesta += `El valor de la expresion es : ${valor} \n`;
             }else{
                 console.log(`El valor de la expresion es : ERROR`);
                 respuesta += `El valor de la expresion es : ERROR \n`;
             }
             
         }*/
        res.status(200).json({ consola: controlador.consola, ts: ts_html, errores: ts_html_error });
        //res.status(200).json({consola : '', ts : ''});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ resultado: "Se ha producido un error" });
    }
});
module.exports = router;
