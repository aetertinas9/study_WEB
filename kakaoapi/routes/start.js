var models = require('../model');
var user = models.User;
// Include Express
var express = require('express');
// Initialize the Routern
var router = express.Router();
  // we use node-config to handle environments


// Setup the Route
router.get('/', function (req, res) {

User.findAll().then(function(users) {
    console.log(users);;
});

// return a json response to angular
res.json({
    'msg': users
});
});

router.get('/user', function (req, res) {

// return a json response to angular
res.json({
    'msg': "user"
});
});



// Expose the module
module.exports = router;
