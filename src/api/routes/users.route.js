const express = require('express');
const {login, register, checkSession, getUserById} = require('../controllers/users.controller');
const { isAuth } = require('../../middlewares/auth');
const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/register', register);
userRouter.get('/checksession',isAuth, checkSession); //quitado siaauth
userRouter.get('/:id', getUserById);

module.exports = userRouter;
