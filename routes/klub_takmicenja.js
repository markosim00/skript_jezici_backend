const express = require('express');
const {sequelize, Klub_Takmicenje} = require('../models');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({extended: true}));

route.get('/klub_takmicenjes', (req, res) => {

    Klub_Takmicenje.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/klub_takmicenjes/:id', (req, res) => {

    Klub_Takmicenje.findOne({ where: { id: req.params.id }, include: ['klub', 'takmicenje'] })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/klub_takmicenjes', (req, res) => {
    
    Klub_Takmicenje.create({brPobeda: req.body.brPobeda, brPoraza: req.body.brPoraza,
         klubId: req.body.klubId, takmicenjeId: req.body.takmicenjeId})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.put('/klub_takmicenjes/:id', (req, res) => {
    
    Klub_Takmicenje.findOne({ where: { id: req.params.id }, include: ['klub', 'takmicenje'] })
        .then( klub_takmicenje => {
            klub_takmicenje.brPobeda = req.body.brPobeda;
            klub_takmicenje.brPoraza = req.body.brPoraza;

            klub_takmicenje.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});

route.delete('/klub_takmicenjes/:id', (req, res) => {

    Klub_Takmicenje.findOne({ where: { id: req.params.id }, include: ['klub', 'takmicenje'] })
        .then( klub_takmicenje => {
            klub_takmicenje.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});


module.exports = route;