import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

export const ValidateMiddleware = (schema: yup.AnyObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
    
    // Validating the request body
    try {

        // Using the validateSync method to validate the request body
        schema.validateSync(req.body);

        next();
    } catch (error: any) {

        // if any error occurs, send the error message to the client
        res.status(400).json({ 
            status: 400,
            message: error.message 
        });
    }
}