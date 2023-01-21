const { Router } = require('express');
const userRouter = require('./userRoutes');

const apiRouter = new Router();

apiRouter.use('/user', userRouter);

module.exports = apiRouter;
