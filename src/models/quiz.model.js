const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    questions: [{
        questionText: {
            type: String,
        },
        answerChoices: {
            type: [String],
            validate: [arrayLimit, 'At least two answer choices are required'],
        },
        correctAnswer: {
            type: String,
        }
    }]
}, {
    timestamps: true,
});


function arrayLimit(val) {
    return val.length >= 2;
}

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
