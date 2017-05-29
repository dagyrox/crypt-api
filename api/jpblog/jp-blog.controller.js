'use strict';

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://jpblogwrite:hiop123j@ds139567.mlab.com:39567/jasonpolitis');

var models = require('./jp-blog.models');
var Post = models.post;

exports.create = function (req, res) {
    if (req.body) {
        var newPost = new Post(req.body);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            // we're connected!
        });

        newPost.save(function (err, post) {
            if (err) {
                return res.status(500).send(err);
            }

            return res.status(200).json('New Post Successful');
        });
    }
};

exports.getAll = function (req, res) {
    console.log('getAll');
    if (req.params.id) {
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            // we're connected!
        });

        Post.find().sort({ date: -1 }).exec(function (err, posts) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }

            return res.status(200).json(posts);
        });
    } else {
        return res.status(500).send('No ID Dummy!');
    }
};

exports.delete = function(req,res){
    console.log('delete');
    if (req.params.id) {
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            // we're connected!
        });

        Post.findById(req.params.id, function (err, post) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            if(!post){return res.status(404).send('Not Found');}
            
            post.remove(function(err){
                if(err){return res.status(500).send(err);}

                return res.status(204).send('Delete Successful');
            });
        });
    } else {
        return res.status(500).send('No ID Dummy!');
    }
}
