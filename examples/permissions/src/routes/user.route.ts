import { Router } from 'express';
import * as controller from '../useCases/user/controller/user.controller';
import { ValidateMiddleware } from '../middlewares/validate.middleware';
import { loginSchema } from '../schemas/login.schema';
import { updateUserSchema } from '../schemas/updateUser.schema';
import { TokenMiddleware } from '../middlewares/token.middleware';
import { PermissionMiddleware } from '../middlewares/permission.middleware';
import { Permission } from '../@types/permission.type';

const route = Router();

// Adding route to get all users
route.get('/', [TokenMiddleware, PermissionMiddleware(Permission.READ_USER_LIST)], controller.getUsers)

// Adding route to get user by id
route.get('/:id', [TokenMiddleware, PermissionMiddleware(Permission.READ_USER_DETAILS)], controller.getUserById)

// Adding route to create a user
route.post('/', [ValidateMiddleware(loginSchema)], controller.createUser)

// Adding route to update a user
route.put('/', [
    TokenMiddleware, 
    ValidateMiddleware(updateUserSchema), 
    PermissionMiddleware(Permission.WRITE_USER_DETAILS)
], 
controller.updateUser)

export default route;