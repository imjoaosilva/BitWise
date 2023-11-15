import { Router } from 'express';
import * as controller from '../useCases/auth/controller/auth.controller';
import { ValidateMiddleware } from '../middlewares/validate.middleware';
import { loginSchema } from '../schemas/login.schema';

const route = Router();

// Adding route to get all users
route.post('/login', [ValidateMiddleware(loginSchema)], controller.Login)

export default route;