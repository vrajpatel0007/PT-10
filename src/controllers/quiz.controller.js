const quiz_service = require("../services/quiz.service");


const getquizzes = async (req, res) => {
    try {
        const quizzes = await quiz_service.getquiz();
        return res.status(200).json(quizzes);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching quizzes' });
    }
}

const quizbyid = async (req, res) => {
    try {
        const quizid = req.body.id
        const quiz = await quiz_service.findById(quizid);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        return res.status(200).json(quiz);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching quiz' });
    }
}

const submitquiz = async (req, res) => {
    try {
        const quizid = req.body.id
        const quiz = await quiz_service.findById(quizid);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        const userAnswers = req.body.answers;
        let score = 0;

        quiz.questions.forEach((question, index) => {
            if (userAnswers[index] && userAnswers[index] === question.correctAnswer) {
                score++;
            }
        });

        res.json({ score, totalQuestions: quiz.questions.length });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting quiz' });
    }
}

const createquiz = async (req, res) => {
    try {
        const quizData = req.body;
        const newQuiz = await quiz_service.createQuiz(quizData);
        return res.status(201).json(newQuiz);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating quiz' });
    }
};

const deleteQuiz = async (req, res) => {
    try {
        const quizId = req.body.id;
        const quiz = await quiz_service.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        const deletedQuiz = await quiz_service.deleteQuiz(quizId);
        return res.status(200).json({ message: 'Quiz deleted successfully', deletedQuiz });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getquizzes,
    quizbyid,
    submitquiz,
    createquiz,
    deleteQuiz
}