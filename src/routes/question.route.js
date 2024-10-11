const express = require('express');
const router = express.Router();
const question_controller = require('../controllers/question.controller');


router.post('/questions', question_controller.addQuestion);
router.get('/questions', question_controller.getQuestions);
router.delete('/questions', question_controller.deleteQuestion);

module.exports = router;
