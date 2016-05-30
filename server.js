// BASE SETUP
var express = require('express'); // call express
var app = express(); // define our app using express
var cors = require('cors'); // enabling cors as angular app is hosted in different port
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./app/models/user');
var Dependent = require('./app/models/dependent');
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
        console.log('coming post.');
        var user = new User();
        user.name = req.body.name;
        user.password = req.body.password;
        user.employeeid = req.body.employeeid;
        user.approvalsPending = req.body.approvalsPending;
        user.insurancePending = req.body.insurancePending;
        user.trainingsPending = req.body.trainingsPending;
        user.timesheetPending = req.body.timesheetPending;
        user.genPending = req.body.genPending;
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


router.route('/claims')
    .post(function (req, res) {
        console.log('coming post of claims');
        var dependent = new Dependent();
        dependent.status = req.body.status;
        dependent.claimNumber = req.body.claimNumber;
        dependent.submittedTo = req.body.submittedTo;
        dependent.claimType = req.body.claimType;
        dependent.cost = req.body.cost;
        dependent.submitter = req.body.submitter;
        dependent.save(function (err) {
            if (err)
                res.send(err);

            res.json({
                message: 'Claim created!'
            });
        });
    })
    .get(function (req, res) {
        Dependent.find(function (err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });


//get- I'm passing query linke name to find all the details with passed name
router.route('/users/:user_id')
    .get(function (req, res) {
        User.find({
            name: req.params.user_id
        }, function (err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })
    .put(function (req, res) {
        User.findById(req.params.user_id, function (err, user) {
            if (err)
                res.send(err);
            user.insurancePending = req.body.insurancePending; // update the users info
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

//get- I'm passing query linke name to find all the details with passed name
router.route('/approvals/:user_id')
    .get(function (req, res) {
        Dependent.find({
            submittedTo: req.params.user_id
        }, function (err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    });


router.route('/genDet/:user_id')
    .put(function (req, res) {
        User.findById(req.params.user_id, function (err, user) {
            if (err)
                res.send(err);
            user.genPending = req.body.genPending; // update the users info
            user.save(function (err) {
                if (err)
                    res.send(err);

                res.json({
                    message: 'User updated!'
                });
            });

        });
    });



//get- I'm passing query linke name to find all the details with passed name
router.route('/claims/:user_id')
    .get(function (req, res) {
        Dependent.find({
            submitter: req.params.user_id
        }, function (err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })
    .put(function (req, res) {
        Dependent.findById(req.params.user_id, function (err, dependent) {
            if (err)
                res.send(err);
            dependent.status = req.body.status; // update the users info
            dependent.save(function (err) {
                if (err)
                    res.send(err);

                res.json({
                    message: 'User updated!'
                });
            });

        });
    })
    .delete(function (req, res) {
        Dependent.remove({
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