var express = require('express');
const { signup, signin } = require('../Controllers/userController');
var userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);

module.exports = userRouter;
