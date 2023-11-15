import { Router } from "express";
import * as controller from '../useCases/user/controller/user.controller';

const route = Router();

route.get('/', controller.getUsers)

export default route;