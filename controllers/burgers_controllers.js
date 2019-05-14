var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js')

var app = express();

// Import the model (cat.js) to use its database functions.
app.get('/', function (req, res) {
    burger.all(function (burger_data) {
        console.log(burger_data);
        res.render('index', { burger_data });
    })
})

app.post('/burgers/update', function (req, res) {
    burger.update(req.body.burger_id, function (result) {
        console.log(result);
        res.redirect('/');
    });
});

app.post('/burger/create', function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        res.redirect('/');
    });
});
// Export routes for server.js to use.
module.exports = app;