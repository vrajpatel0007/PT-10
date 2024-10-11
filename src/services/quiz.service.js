const Quiz = require("../models/quiz.model")

const getquiz = async () => {
    return await Quiz.find();
}

const findById = async (id) => {
    return await Quiz.findById(id);
}

const createQuiz = async (body) => {
    return await Quiz.create(body);
}

const deleteQuiz = async (quizId) => {
    return await Quiz.findByIdAndDelete(quizId);
};

module.exports= {
    getquiz,
    findById,
    createQuiz,
    deleteQuiz
}