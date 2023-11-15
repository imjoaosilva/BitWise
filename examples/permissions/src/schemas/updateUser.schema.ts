import * as yup from 'yup';

// Creating a schema for the login route
export const updateUserSchema = yup.object({
    email: yup.string().email().required(),
    permission: yup.number().required(),
});