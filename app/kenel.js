const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const bodyParse = require('body-parser');
const session = require('express-session');
const passport = require('passport');


require('./passport');
app.use(bodyParse.urlencoded({extended: false}));
app.use(session({secret: "viet-pro", saveUninitialized: true, resave: true}));
app.use(expressLayouts);
app.use(express.static(path.join(__basepath,'public')));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
    global.req = req;
    next();
})

app.use('/', middleware.SwitchLayout, require(path.join(__basepath,'routes','web')));