import * as yup from 'yup';

// Creating a schema for the login route
export const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
});