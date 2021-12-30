const express = require('express');
const {sequelize, Utakmica} = require('../models');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({extended: true}));

route.get('/utakmicas', (req, res) => {

    Utakmica.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/utakmicas/:id', (req, res) => {

    Utakmica.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/utakmicas', (req, res) => {
    
    Utakmica.create({ domacin: req.body.domacin, gost: req.body.gost , rezDomacin: req.body.rezDomacin, 
        rezGost: req.body.rezGost, dvorana: req.body.dvorana, datum: req.body.datum, vreme: req.body.vreme})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.put('/utakmicas/:id', (req, res) => {
    
    Utakmica.findOne({ where: { id: req.params.id } })
        .then( utakmica => {
            utakmica.domacin = req.body.domacin;
            utakmica.gost = req.body.gost;
            utakmica.rezDomacin = req.body.rezDomacin;
            utakmica.rezGost = req.body.rezGost;
            utakmica.dvorana = req.body.dvorana;
            utakmica.datum = req.body.datum;
            utakmica.vreme = req.body.vreme;

            utakmica.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});

route.delete('/utakmicas/:id', (req, res) => {

    Utakmica.findOne({ where: { id: req.params.id } })
        .then( utakmica => {
            utakmica.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});

module.exports = route;