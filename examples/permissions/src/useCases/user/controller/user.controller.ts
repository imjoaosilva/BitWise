import { Response } from 'express';
import { Request } from '../../../@types/request.type';
import * as repository from '../repository/user.repository';
import { generateToken } from '../../auth/repository/auth.repository';
import { Permission } from '../../../@types/permission.type';
import { getNamesByPermission } from '../../../services/permission.service';

export const getUsers = async (req: Request, res: Response) => {

    // Getting all users
    const users = await repository.getUsers();

    res.json({
        status: 200,
        length: users.length,
        users: users.map(user => ({
            id: user.id,
            email: user.email,
            permission : user.permissions,
            permission_str: getNamesByPermission(user.permissions)
        }))
    })
}

export const createUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Validating the user
    const user = await repository.validateUser(email, password);

    if(user) return res.status(400).json({
        status: 400,
        message: 'User already exists'
    });

    // Creating the user
    const createduser = await repository.createUser(email, password);
    const token = generateToken(createduser);

    res.json({
        status: 201,
        message: 'User created successfully',
        token
    })
}

export const updateUser = async (req: Request, res: Response) => {
    const { email, permission } = req.body;
    
    if(!Permission[permission]) return res.status(400).json({
        status: 400,
        message: 'Invalid permission'
    });

    if(permission == req.user!.permissions) return res.status(400).json({
        status: 400,
        message: 'The user already has this permission'
    });

    await repository.updateUser(email, permission);

    res.json({
        status: 200,
        message: 'User updated successfully',
        permission: Permission[permission]
    })

}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;

    if(!id) return res.status(400).json({
        status: 400,
        message: 'Invalid id'
    });

    const user = await repository.getUserById(id);

    // Checking if the user exists
    if(!user) return res.status(404).json({
        status: 404,
        message: 'User not found'
    });

    res.json({
        status: 200,
        user: {
            email: user.email,
            permission: user.permissions,
            permission_str: getNamesByPermission(user.permissions)
        }
    })
}