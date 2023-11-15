import { prisma } from '../../../services/prismaclient.service';
import bycrpt from 'bcrypt';

export const getUsers = async () => {

    // Getting all users from the database
    const user = await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            permissions: true
        }
    });

    // Returning the users
    return user;
}

export const getUser = async (email: string) => {
    
    // Getting the user from the database
    const user = await prisma.user.findUnique({
        where: {
            email
        },
        select: {
            email: true,
            permissions: true
        }
    });

    // Returning the user
    return user;
}

export const validateUser = async (email: string, password: string) => {
    
    // Getting the user from the database
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    // Checking if the user exists
    if (!user) return false;
    

    // Checking if the password is correct
    const isValidPassword = await bycrpt.compare(password, user.password);

    if(!isValidPassword) return false;

    // Returning the user
    return user;
}

export const createUser = async (email: string, password: string) => {

    // Hashing the password
    const hashedPassword = await bycrpt.hash(password, 10);

    // Creating the user
    const user = await prisma.user.create({
        data: {
            permissions: 0,
            email,
            password: hashedPassword,
        },
        select: {
            email: true,
            permissions: true
        }
    });

    // Returning the user
    return user;
}

export const updateUser = async (email: string, permissions: number) => {

    // Updating the user
    const user = await prisma.user.update({
        where: {
            email
        },
        data: {
            permissions
        },
        select: {
            email: true,
            permissions: true
        }
    });

    // Returning the user
    return user;
}

export const getUserById = async (id: string) => {

    // Getting the user from the database
    const user = await prisma.user.findUnique({
        where: {
            id
        },
        select: {
            email: true,
            permissions: true
        }
    });

    // Returning the user
    return user;
}