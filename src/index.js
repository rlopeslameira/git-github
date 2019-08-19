const express = require('express'); // gerencia rotas
const path = require('path'); // gerencia caminhos
const cors = require('cors'); // permitir que o BACKEND seja acessado de qualquer domínio

const app = express();
app.use(cors());

const server = require('http').Server(app); // conexões http

app.use(express.json()); // permite receber json data
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {

    console.log(req.socket.remoteAddress);

    res.send("<h1>Api - Path Informática.</h1>")
}); 

app.use('/aluno', require('./routes/alunos')); 

server.listen(process.env.PORT || 3333);
