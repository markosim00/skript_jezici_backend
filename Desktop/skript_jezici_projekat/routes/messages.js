const {Klub_Takmicenje} = require('../models/klub_takmicenje');
const {sequelize, User, Utakmica, Klub, Takmicenje} = require('../models');
const express = require('express');
const utakmica = require('../models/utakmica');
const takmicenje = require('../models/takmicenje');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({extended: true}));

route.get('/users', (req, res) => {

    User.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/users/:id', (req, res) => {

    User.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/users', (req, res) => {
    
    User.create({ name: req.body.name, email: req.body.email , privilege: req.body.privilege})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.put('/users/:id', (req, res) => {
    
    User.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.name = req.body.name;
            usr.email = req.body.email;
            usr.privilege = req.body.privilege;

            usr.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});

route.delete('/users/:id', (req, res) => {

    User.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});


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
    
    Klub.create({ime: req.body.ime, dvorana: req.body.dvorana})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.put('/klubs/:id', (req, res) => {
    
    Klub.findOne({ where: { id: req.params.id } })
        .then( klub => {
            klub.ime = req.body.ime;
            klub.dvorana = req.body.dvorana;

            klub.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});

route.delete('/klubs/:id', (req, res) => {

    Klub.findOne({ where: { id: req.params.id } })
        .then( utakmica => {
            utakmica.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});

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
