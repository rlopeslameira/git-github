const express = require('express');
//const multer = require('multer'); // biblioteca de lida com multpart-form-data e automatisa o processo de upload de arquivos

const routes = express.Router();

const Aluno = require('../models/Aluno');
//const multerConfig = require('./config/upload');

//const upload = multer(multerConfig);

//controles
//const loginController = require('./controllers/loginController');

// UPLOAD
//app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));


/*
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

*/


// BUSCAR
routes.get('/aluno/:id', async (req, res) => {
    
    Aluno.findAll({
        where: {
            ID: req.params.id            
        }
    }).then(aluno => {
        res.json(aluno);
    });


});

// Salvar
routes.put('/aluno/:id', (req, res) => {
    
    console.log('atualizado');
    
    const dados = req.body;   

    Aluno.update( req.body , {
        where: {
            ID: dados.ID
        }
    }).then(() => {
        res.json(dados);
    });   
    
}); 



module.exports = routes;
