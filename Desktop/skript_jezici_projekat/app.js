const path = require("path");
const { sequelize } = require('./models');
const express = require("express");
const app1 = express();
const app2 = express();

const apiRoutes = require('./routes/messages');

app1.use('/admin', apiRoutes);

app1.use(express.static(path.join(__dirname, 'static')));

app2.get("/admin", (req, res) => {
    res.sendFile('admin.html', {root: 'static'});
});

app1.get("/", (req, res) => {
    res.sendFile('users.html', {root: 'static'});
});

app2.get("/admin/utakmice", (req, res) => {
    res.sendFile('utakmice.html', {root: 'static'});
});

app2.get("/admin/klubovi", (req, res) => {
    res.sendFile('klubovi.html', {root: 'static'});
});

app2.get("/admin/takmicenja", (req, res) => {
    res.sendFile('takmicenja.html', {root: 'static'});
});

app1.listen( {port: 8000 }, async () => {
    await sequelize.authenticate();
});

app2.listen(9000);