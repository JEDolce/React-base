const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passportSetup = require('./passport');
const passport = require('passport');
const authRoute = require('./routes/auth');
const app = express();

app.use(
    cookieSession({ name: "session", keys: ['JEDolce'], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'UPDATE', 'PATCH'],
    //methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));

// Rutas
app.use('/auth', authRoute);


app.listen('8000', () => {
    console.log('Server running on port 8000');
});
