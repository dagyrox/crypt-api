var mongoose = require('mongoose');
var schema = mongoose.Schema;

var postSchema = new schema({
    date: String,
    author: String,
    title: String,
    content: String,
    comments: []
});

exports.post = mongoose.model('Post', postSchema);

// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'

// fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"