import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { logger } from "./config/logs";
import { routes } from './routes';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.get('/login', (req, res) => {
  return res.render('html/login.html');
});


app.get('/pages/client', (req, res) => {
  return res.render('html/client.html');
});

app.get('/pages/admin', (req, res) => {
  //validar quem entra
  return res.render('html/admin.html');
});

const http = createServer(app); //Criando protocolo http
const io = new Server(http); //Criando protocolo ws

io.on('connection', (socket: Socket) => {
  console.log('Se conectou', socket.id);
});

app.use(express.json());
app.use(routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      let error = {
        error: err.message,
      };
      
      if (err instanceof Error) {      
        logger.info("400", error);
        return response.status(400).json(error);
      }
  
      logger.info("500", error);
      return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  );
export { http, io };