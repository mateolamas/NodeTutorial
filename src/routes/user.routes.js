import {Router} from 'express';
import userSignupDTO from '#Dto/user-signup.dto.js';
import userLoginDTO from '#Dto/user-login.dto.js';
import userUpdateDataDTO from '#Dto/user-update-data.dto.js';
import userUpdateEmailDTO from '#Dto/user-update-email.dto.js';
import userUpdatePasswordDTO from '#Dto/user-update-password.dto.js';
import userUnregisterDTO from '#Dto/user-unregister.dto.js';

const userRouter = Router();

// el middleware valida y si no falla se le pasa a la otra funcion
userRouter.post('/signup', userSignupDTO);
userRouter.post('/login', userLoginDTO);
userRouter.get('/profile');
userRouter.patch('/update-data', userUpdateDataDTO);
userRouter.patch('update-email', userUpdateEmailDTO);
userRouter.patch('/update-password', userUpdatePasswordDTO);
userRouter.delete('/unregister', userUnregisterDTO);

export default userRouter;