import { Request as request } from 'express';
import { User } from './user.type';

// Extending the Request interface to add the user property
export interface Request extends request {
    user?: User;
}