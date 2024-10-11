const question_service = require('../services/question.service');
const quiz_service = require('../services/quiz.service');

// Controller to add a new question to a quiz
const addQuestion = async (req, res) => {
    const quizId = req.body.quizId;
    const questionData = req.body;
    try {
        const updatedQuiz = await question_service.addQuestionToQuiz(quizId, questionData);
        res.status(201).json(updatedQuiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get all questions for a quiz
const getQuestions = async (req, res) => {
    const quizId = req.body.quizId;

    try {
        const quiz = await quiz_service.findById(quizId);
        if (!quiz) {
            throw new Error('Quiz not found');
        }
        const questions = await question_service.getQuestionsByQuizId(quizId);
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to delete a question from a quiz
const deleteQuestion = async (req, res) => {
    const quizId = req.body.quizId;
    const questionId = req.body.questionId;

    try {
        const quiz = await quiz_service.findById(quizId);
    if (!quiz) {
        throw new Error('Quiz not found');
    }
        const updatedQuiz = await question_service.deleteQuestionFromQuiz(quizId, questionId);
        res.status(200).json(updatedQuiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addQuestion,
    getQuestions,
    deleteQuestion
};
