import { Router } from "express";
import * as controller from '../useCases/user/controller/user.controller';

const route = Router();

// Adding route to get all users
route.get('/', controller.getUsers)

export default route;