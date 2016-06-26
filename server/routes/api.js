var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Idea = mongoose.model('Idea');

router.route('/ideas')

// returns all ideas
.get(function(req, res) {

    Idea.find(function(err, data) {

        if (err) {
            res.send(500, err);
        }

        return res.send(data);

    });
})

// create a new post
.post(function(req, res) {

    var idea = new Idea();
    idea.text = req.body.text;
    idea.username = req.body.username;
    idea.idea_name = req.body.idea_name;
    idea.save(function(err, post) {
        if (err) {
            return res.send(500, err);
        }
        return res.json(post);
    });
});

router.route('/ideas/:id')

// returns a particular id
.get(function(req, res) {
    Idea.findById(req.params.id, function(err, idea) {
        if (err)
            res.send(err);
        res.json(idea);
    });
});

module.exports = router;
