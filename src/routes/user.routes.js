import {Router} from 'express';


const userRouter = Router();

// el middleware valida y si no falla se le pasa a la otra funcion
userRouter.post('/signup');

userRouter.post('/login');

userRouter.get('/profile');

userRouter.patch('/update-data');

userRouter.patch('update-email');

userRouter.patch('/update-password');

userRouter.delete('/unregister');

export default userRouter;