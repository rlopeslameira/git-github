const express = require('express');

const routes = express.Router();

const Aluno = require('../models/Aluno');

// LOGAR
routes.get('/:matricula/:senha', async (req, res) => {
    
    Aluno.findAll({
        where: {
            ID: req.params.id            
        }
    }).then(aluno => {
        res.json(aluno);
    });


    

});

// BUSCAR
routes.get('/:id', async (req, res) => {
    
    Aluno.findAll({
        where: {
            ID: req.params.id            
        }
    }).then(aluno => {
        res.json(aluno);
    });


});

// Salvar
routes.put('/:id', (req, res) => {
    
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
