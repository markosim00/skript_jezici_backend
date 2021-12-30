const path = require("path");
const { sequelize } = require('./models');
const express = require("express");
const app = express();

const usersRoutes = require('./routes/messages');
const kluboviRoutes = require('./routes/klubovi');
const utakmiceRoutes = require('./routes/utakmice');
const takmicenjaRoutes = require('./routes/takmicenja');
const klub_takmicenjaRoutes = require('./routes/klub_takmicenja');

app.use('/admin', usersRoutes);
app.use('/admin', kluboviRoutes);
app.use('/admin', utakmiceRoutes);
app.use('/admin', takmicenjaRoutes);
app.use('/admin', klub_takmicenjaRoutes);

app.use(express.static(path.join(__dirname, 'static')));

function getCookies(req) {
    if (req.headers.cookie == null) return {};

    const rawCookies = req.headers.cookie.split('; ');
    const parsedCookies = {};

    rawCookies.forEach( rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });

    return parsedCookies;
};

function authToken(req, res, next) {
    const cookies = getCookies(req);
    const token = cookies['token'];
  
    if (token == null) return res.redirect(301, '/login');
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    
        if (err) return res.redirect(301, '/login');
    
        req.user = user;
    
        next();
    });
}

app.get("/admin", authToken, (req, res) => {
    res.sendFile('index.html', {root: 'static'});
});

app.get('/register', (req, res) => {
    res.sendFile('register.html', { root: './static' });
});

app.get('/login', (req, res) => {
    res.sendFile('login.html', { root: './static' });
});

app.listen( {port: 8000 }, async () => {
    await sequelize.authenticate();
});


