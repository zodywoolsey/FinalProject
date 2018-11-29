'use strict';
const express = require('express'),
    app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
app.get('/', function(req,res){
    res.render('main');
})

app.listen(11000);