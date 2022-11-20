import { Router } from 'express';
import  {signUp, signIn}  from '../controllers/authController.js';
import signupValidationMiddleware from '../middlewares/signupValidationMiddleware.js';
import signinValidationMiddleware from '../middlewares/signinValidationMiddleware.js';
const authRouter = Router();
authRouter.post("/sign-up", signupValidationMiddleware, signUp);
authRouter.post("/sign-in", signinValidationMiddleware,  signIn);
export default authRouter;

