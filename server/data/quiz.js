const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
});

const Quiz = mongoose.model('pros', quizSchema);

module.exports = Quiz;
