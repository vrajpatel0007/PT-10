const express = require('express');
const router = express.Router();
const quiz_controller = require('../controllers/quiz.controller');


router.get('/quizzes', quiz_controller.getquizzes);
router.get('/quizbyID',quiz_controller.quizbyid);
router.post('/submit',quiz_controller.submitquiz);
router.post('/create', quiz_controller.createquiz);
router.delete('/deletequiz', quiz_controller.deleteQuiz);
module.exports = router;
