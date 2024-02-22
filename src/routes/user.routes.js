import {Router} from 'express';
import userSignupDTO from '#Dto/user-signup.dto.js';
import userLoginDTO from '#Dto/user-login.dto.js';
import userUpdateDataDTO from '#Dto/user-update-data.dto.js';
import userUpdateEmailDTO from '#Dto/user-update-email.dto.js';
import userUpdatePasswordDTO from '#Dto/user-update-password.dto.js';
import userUnregisterDTO from '#Dto/user-unregister.dto.js';
import userJWTDTO from '#Dto/user-jwt.dto.js';
import userSignupController from '#Controllers/user-signup.controller.js';
import userLoginController from '#Controllers/user-login.controller.js';
import userProfileController from '#Controllers/user-profile.controller.js';
import userUpdateDataController from '#Controllers/user-update-data.controller.js';
import userUpdateEmailController from '#Controllers/user-update-email.controller.js';
import userUpdatePasswordController from '#Controllers/user-update-password.controller.js';

const userRouter = Router();

// el middleware valida y si no falla se le pasa a la otra funcion
userRouter.post('/signup', userSignupDTO, userSignupController);
userRouter.post('/login', userLoginDTO, userLoginController);
userRouter.get('/profile', userJWTDTO, userProfileController);
userRouter.patch('/update-data', userJWTDTO, userUpdateDataDTO, userUpdateDataController);
userRouter.patch('/update-email', userJWTDTO, userUpdateEmailDTO, userUpdateEmailController);
userRouter.patch('/update-password', userJWTDTO, userUpdatePasswordDTO, userUpdatePasswordController);
userRouter.delete('/unregister', userJWTDTO, userUnregisterDTO);

export default userRouter;