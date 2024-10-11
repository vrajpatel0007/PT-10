const express = require("express");
const routes = express.Router();
const userRoute = require("./user.route");
const quizRoute = require("./quiz.route");
const questionRoute = require("./question.route");

routes.use("/user", userRoute);
routes.use("/quiz", quizRoute);
routes.use("/question", questionRoute);

module.exports = routes;
