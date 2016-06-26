var express = require('express');
var router = express.Router();

router.route('/ideas')

// returns all ideas
.get(function(req, res) {
    // temporary solution
    res.send({
        message: 'TODO return all posts'
    });
})

// create a new post
.post(function(req, res) {
    // temporary solution
    res.send({
        message: 'TODO Create a new post'
    });
});

router.route('/ideas/:id')

// returns a particular id
.get(function(req, res) {
    res.send({
        message: 'TODO return idea with ID' + req.params.id
    });
});

module.exports = router;
