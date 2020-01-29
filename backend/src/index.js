const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();

const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://vinicios:059580@cluster0-8dzzb.mongodb.net/week10?retryWrites=true&w=majority',{
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());   
app.use(routes);

server.listen(3333);




//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametros:

//Query Params: req.query (Filtros, ordenação, paginação...)
//route params: Params (Indentificar um recurso na alteração ou remoção)
//body: request. body (Daos para criação ou alteração de um registro )
