import { Request, Response } from 'express';
import { validateUser } from '../../user/repository/user.repository';
import * as repository from '../repository/auth.repository';

export const Login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Validating the user
    const user = await validateUser(email, password);

    // Checking if the user exists
    if(!user) return res.status(400).json({
        status: 400,
        message: 'Invalid credentials'
    });

    // Creating the token
    const token = repository.generateToken(user);

    // sending the data to the client

    res.json({
        status: 200,
        message: 'Logged in successfully',
        token
    })

}