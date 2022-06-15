const parser = require("./gramatica/gramatica");
import { Environment } from "./symbols/environment";
import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';



class Server{
    public app: Application;

    constructor(){
        this.app= express();
        this.config();
        this.post();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 8000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    public post(): void{

        this.app.post ("/", (req, res) => {
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
        });
    }

    

    start(): void{
        this.app.listen(this.app.get('port'), ()=>{
        console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();