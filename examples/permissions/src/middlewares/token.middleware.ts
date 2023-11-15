import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Request } from '../@types/request.type';
import { User } from '../@types/user.type';
import { getUser } from '../useCases/user/repository/user.repository';
import { generateToken } from '../useCases/auth/repository/auth.repository';

export const TokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    // Getting the token from the headers
    const token = req.headers.authorization?.split(' ')[1];

    // If the token is not provided, send an error message to the client
    if(!token) return res.status(401).json({
        status: 401,
        message: 'Unauthorized'
    });

    try {

        // Verifying the token
        const payload = jwt.verify(token, process.env.JWT_SECRET!) as User;

        // Getting the user from the database
        const user = await getUser(payload.email) as User;

        // If the user permissions are updated, generate a new token
        if(payload.permissions !== user.permissions) {
            req.user = user;
            return next();
        }

        // Adding the user to the request object
        req.user = payload;

        next();
    } catch (error: any) {

        // If any error occurs, send the error message to the client
        res.status(400).json({
            status: 400,
            message: "Invalid token"
        });
    }
}