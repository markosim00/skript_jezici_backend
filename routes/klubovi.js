const express = require('express');
const {sequelize, Klub} = require('../models');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({extended: true}));

route.get('/klubs', (req, res) => {

    Klub.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/klubs/:id', (req, res) => {

    Klub.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/klubs', (req, res) => {
    
    Klub.create({naziv: req.body.naziv, dvorana: req.body.dvorana})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.put('/klubs/:id', (req, res) => {
    
    Klub.findOne({ where: { id: req.params.id } })
        .then( klub => {
            klub.naziv = req.body.naziv;
            klub.dvorana = req.body.dvorana;

            klub.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});

route.delete('/klubs/:id', (req, res) => {

    Klub.findOne({ where: { id: req.params.id } })
        .then( klub => {
            klub.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});

module.exports = route;
