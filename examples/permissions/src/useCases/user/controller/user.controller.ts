import {Request, Response} from 'express';
import * as repository from '../repository/user.repository';

export const getUsers = async (req: Request, res: Response) => {
    const users = await repository.getUsers();

    res.json({
        status: 200,
        length: users.length,
        users
    })
}