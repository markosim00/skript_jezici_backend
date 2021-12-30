const express = require('express');
const {sequelize, Takmicenje} = require('../models');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({extended: true}));

route.get('/takmicenjes', (req, res) => {

    Takmicenje.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/takmicenjes/:id', (req, res) => {

    Takmicenje.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/takmicenjes', (req, res) => {
    
    Takmicenje.create({naziv: req.body.naziv})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.put('/takmicenjes/:id', (req, res) => {
    
    Takmicenje.findOne({ where: { id: req.params.id } })
        .then( takmicenje => {
            takmicenje.naziv = req.body.naziv;

            takmicenje.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});

route.delete('/takmicenjes/:id', (req, res) => {

    Takmicenje.findOne({ where: { id: req.params.id } })
        .then( takmicenje => {
            takmicenje.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});

module.exports = route;