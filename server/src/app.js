const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const parser = require("./Analizador/interprete");
var Controlador = require("../src/Interprete/Controlador");
var TablaSimbolos = require("../src/Interprete/TablaSimbolos/TablaSimbolos");


app.set('port', 8080);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const path = require('path');

app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, '../../front/index.html'));
});

app.get("/ast", function (req, res) {
    res.sendFile(path.resolve(__dirname, '../../front/ast.html'));
});

app.get("/tabla", function (req, res) {
    res.sendFile(path.resolve(__dirname, '../../front/tabla.html'));
});
app.get("/errores", function (req, res) {
    res.sendFile(path.resolve(__dirname, '../../front/errores.html'));
});
app.get("/ast.png", function (req, res) {
    res.sendFile(path.resolve(__dirname, '../../front/ast.png'));
});





app.post("/", function (req, res) {
    console.log(req.body.texto.toString());
    console.log("");
    let ast = parser.parse(req.body.texto.toString());
    
    let controlador = new Controlador.default();
    let ts_global = new TablaSimbolos.default(null);
    ast.ejecutar(controlador, ts_global);

    var ts_html = controlador.graficar_ts(controlador, ts_global);
    
    let TablaArray = controlador.getTablaHtml();
    TablaArray.pop;
    var ts_html_error = controlador.obtenererrores();


    console.log("consola");
    console.log(controlador.consola);
    //console.log("\n TABLA DE SIMBOLOS\n", ts_html);
    //console.log("\n TABLA DE ERRORES\n", ts_html_error);



    let variables = [];
    var fila = ts_html.split('~')
    fila.forEach(value => {
        var cadenasimple = value.split(',')
        variables.push(cadenasimple);
    });
    //console.log("\nTabla de Simbolos\n")
    //console.log(variables);
    html1(variables, TablaArray);




    let variablesError = [];
    fila = ts_html_error.split("~");
    fila.forEach(value => {
        var cadenaSimple = value.split(",");
        variablesError.push(cadenaSimple);
    });
    //console.log("\nLista de errores\n")
    //console.log(variablesError);
    html2(variablesError);



    let nodo_ast = ast.recorrer();
    let graphviz = nodo_ast.GraficarSintactico();  //Aqui tenemos la cadena de graphviz para graficar
    console.log('\n GRAFO \n');
    console.log(graphviz);
    grafo(graphviz);


    res.json({ consola: controlador.consola});
}   // end of post
);




function html1(variables, Tablas) {
    console.log("\nTabla de Simbolos\n")
    var html = '<!DOCTYPE html>' +
        '<html lang="es">' +
        '<head>' +
        '<meta charset="UTF-8" />' +
        '<meta http-equiv="X-UA-Compatible" content="IE=edge" />' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
        '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"' +
        'integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">' +
        '<title>tabla</title>' +
        '</head>' +
        '<body>' +
        '<div class="bg-success p-2 text-dark bg-opacity-50">' +
        '<div class="botones">'+
        '<a href="http://localhost:8080/"    style="width: 200px;" class="btn btn-secondary">Volver a Analizador</a>'+
       '<a href="http://localhost:8080/tabla"  style="width: 200px;" class="btn btn-secondary">Tabla de simbolos</a>'+
       '<a href="http://localhost:8080/errores"  style="width: 150px;" class="btn btn-secondary">Tabla de errores</a>'+
      '</div>'+
        '<center>' +
        '<h1>Tabla de Simbolos Global</h1>' +
        '<br>' +
        '<table class="table table-success table-striped-columns">' +
        '<thead>' +
        '<tr>' +
        '<th scope="col">#</th>' +
        '<th scope="col">Rol</th>' +
        '<th scope="col">Nombre</th>' +
        '<th scope="col">Tipo</th>' +
        '<th scope="col">Valor</th>' +
        '<th scope="col">Linea</th>' +
        '<th scope="col">Columna</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>';
    for (var i = 0; i < variables.length; i++) {
        html += '<tr>';
        html += '<th scope="row">' + (i + 1) + '</th>';

        html += '<td>' + variables[i][0] + '</td>';
        html += '<td>' + variables[i][1] + '</td>';
        html += '<td>' + variables[i][2] + '</td>';
        html += '<td>' + variables[i][4] + '</td>';
        html += '<td>' + variables[i][6] + '</td>';
        html += '<td>' + variables[i][7] + '</td>';

        html += '</tr>';
    }
    html += '</tbody></table>';
    for (var x = 0; x < Tablas.length-1; x++) { 
        let variabless = [];
        var fila = Tablas[x].split('~')
        fila.forEach(value => {
            var cadenasimple = value.split(',')
            variabless.push(cadenasimple);
        });

        html += '<h1>Tabla de Simbolos '+(x+1)+'</h1>' +
        '<br>' +
        '<table class="table table-success table-striped-columns">' +
        '<thead>' +
        '<tr>' +
        '<th scope="col">#</th>' +
        '<th scope="col">Rol</th>' +
        '<th scope="col">Nombre</th>' +
        '<th scope="col">Tipo</th>' +
        '<th scope="col">Valor</th>' +
        '<th scope="col">Linea</th>' +
        '<th scope="col">Columna</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>';
    for (var i = 0; i < variabless.length; i++) {
        html += '<tr>';
        html += '<th scope="row">' + (i + 1) + '</th>';

        html += '<td>' + variabless[i][0] + '</td>';
        html += '<td>' + variabless[i][1] + '</td>';
        html += '<td>' + variabless[i][2] + '</td>';
        html += '<td>' + variabless[i][4] + '</td>';
        html += '<td>' + variabless[i][6] + '</td>';
        html += '<td>' + variabless[i][7] + '</td>';

        html += '</tr>';
    }
    html += '</tbody></table>';
     }
    


    html += '</center></div></body></html>'
    let fs = require('fs')
    try {
        let data = fs.writeFileSync('../front/tabla.html', html)
        //file written successfully
    } catch (err) {
        console.error(err)
    }
}

function html2(variablesError) {
    console.log("\nLista de Errores\n")
    var html = '<!DOCTYPE html>' +
        '<html lang="es">' +
        '<head>' +
        '<meta charset="UTF-8" />' +
        '<meta http-equiv="X-UA-Compatible" content="IE=edge" />' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
        '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"' +
        'integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">' +
        '<title>Errores</title>' +
        '</head>' +
        '<body>' +
        '<div class="bg-success p-2 text-dark bg-opacity-50">' +
        '<div class="botones">'+
        '<a href="http://localhost:8080/"    style="width: 200px;" class="btn btn-secondary">Volver a Analizador</a>'+
       '<a href="http://localhost:8080/tabla"  style="width: 200px;" class="btn btn-secondary">Tabla de simbolos</a>'+
       '<a href="http://localhost:8080/errores"  style="width: 150px;" class="btn btn-secondary">Tabla de errores</a>'+
      '</div>'+
        '<center>' +
        '<h1>Errores</h1>' +
        '<br>' +
        '<table class="table table-success table-striped-columns">' +
        '<thead>' +
        '<tr>' +
        '<th scope="col">#</th>' +
        '<th scope="col">Tipo</th>' +
        '<th scope="col">Descripcion</th>' +
        '<th scope="col">Linea</th>' +
        '<th scope="col">Columna</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>';
    for (var i = 0; i < variablesError.length; i++) {
        html += '<tr>';
        html += '<th scope="row">' + (i + 1) + '</th>';

        html += '<td>' + variablesError[i][0] + '</td>';
        html += '<td>' + variablesError[i][1] + " " + variablesError[i][2] + '</td>';
        html += '<td>' + variablesError[i][3] + '</td>';
        html += '<td>' + variablesError[i][4] + '</td>';

        html += '</tr>';
    }
    html += '</tbody></table></center></div></body></html>'
    let fs = require('fs')
    try {
        let data = fs.writeFileSync('../front/errores.html', html)
        //file written successfully
    } catch (err) {
        console.error(err)
    }
}

function grafo(graphviz) {
    let fs = require('fs')
    try {
        let data = fs.writeFileSync('../front/ast.dot', graphviz)
        //file written successfully
    } catch (err) {
        console.error(err)
    }


    var exec = require('child_process').exec, child;
    child = exec('dot -T png -o ../front/ast.png ../front/ast.dot',
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });

}



app.listen(app.get('port'), function () {
    console.log('Server is running on port 8080!');
});

