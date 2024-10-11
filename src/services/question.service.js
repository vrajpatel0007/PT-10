const Quiz = require('../models/quiz.model');


const addQuestionToQuiz = async (quizId, questionData) => {
    return await Quiz.findByIdAndUpdate(quizId, { $push: { questions: questionData } }, { new: true });
};


const getQuestionsByQuizId = async (quizId) => {
    const quiz = await Quiz.findById(quizId);
    return quiz.questions;
};

const deleteQuestionFromQuiz = async (quizId, questionId) => {
    return await Quiz.findByIdAndUpdate(quizId, { $pull: { questions: { _id: questionId } } }, { new: true });
};

module.exports = {
    addQuestionToQuiz,
    getQuestionsByQuizId,
    deleteQuestionFromQuiz
};
