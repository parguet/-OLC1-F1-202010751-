const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const parser = require("../javaScript/gramatica/gramatica");
const {Environment} = require("../javaScript/symbols/environment");


app.set('port', 8080);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const path = require('path');

app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, '../../front/index.html'));
}   // end of get
);


app.post("/", function (req, res) {
    console.log(req.body.texto.toString());
    console.log("");
    let ast = parser.parse(req.body.texto.toString());
    let env = new Environment(null);
    for (let instruccion of ast){
        try {
            instruccion.ejecutar(env);
        } catch (error) {
            
        }
    }
    res.send("Hello World");
}   // end of post
);


app.listen(app.get('port'), function () {
    console.log('Server is running on port 8080!');
});


