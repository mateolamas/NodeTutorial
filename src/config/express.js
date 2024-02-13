import express from 'express';
import userRouter from '#Routes/user.routes.js';


const expressApp = express();

// middlewares
expressApp.use(express.json());


// routes
expressApp.use('/user', userRouter);






export default expressApp;