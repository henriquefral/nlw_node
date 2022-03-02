import express, {Request, Response, NextFunction} from "express";
import "reflect-metadata";
import "./database";
import { router } from "./routes";
import "express-async-errors";
const app = express();

/**
 * Tipos de parâmetros
 * Route Params => Fazem parte da rota, como o id do produto. .../produtos/1
 * Query Params => Parâmetros que tem ligação com o banco de dados para GET, como pesquisas. .../produtos?name=teclado&description=bom
 * 
 * Body Params => Parâmetros para o método post, patch e put, corpo de uma requisição. Ex: {
 *  "name": "teclado",
 *  "description": "bom"
 * }
 */

app.get("/test", (request, response) => {
    //Request => Entrando
    //Response => Saindo
    return response.send("Olá, Henrique");
});

app.use(express.json());

app.use(router);

app.use((err:Error, request: Request, response: Response, next: NextFunction) => 
{
    if(err instanceof Error) {
        return response.status(400).json({error: err.message});
    } else {
        return response.status(500).json({status: "error", message: "Internal Server Error"});
    }
})

app.listen(3000, ()=> console.log('Servidor funcionando.'));