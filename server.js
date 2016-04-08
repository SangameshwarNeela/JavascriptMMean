// BASE SETUP
var express = require('express'); // call express
var app = express(); // define our app using express
var cors = require('cors'); // enabling cors as angular app is hosted in different port
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./app/models/user');
mongoose.connect('mongodb://localhost:27017/userData');
app.use(cors());
app.use(bodyParser());
var port = process.env.PORT || 9011; // set our port


// ROUTES FOR OUR API


var router = express.Router();
router.use(function (req, res, next) {
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
router.get('/', function (req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});
router.route('/users')
    .post(function (req, res) {
        console.log(req);
        console.log('coming post.');
        var user = new User();
        user.name = req.body.name;
        user.password = req.body.password;
        user.save(function (err) {
            if (err)
                res.send(err);

            res.json({
                message: 'User created!'
            });
        });
    })
    .get(function (req, res) {
        User.find(function (err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });


router.route('/users/:user_id')
    .get(function (req, res) {
        User.findById(req.params.user_id, function (err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })
    .put(function (req, res) {
        User.findById(req.params.user_id, function (err, user) {
            if (err)
                res.send(err);
            user.name = req.body.name; // update the users info
            user.save(function (err) {
                if (err)
                    res.send(err);

                res.json({
                    message: 'User updated!'
                });
            });

        });
    })
    .delete(function (req, res) {
        User.remove({
            _id: req.params.user_id
        }, function (err, user) {
            if (err)
                res.send(err);

            res.json({
                message: 'Successfully deleted'
            });
        });
    });
app.use(router);
app.listen(port);
console.log('Magic happens on port ' + port);