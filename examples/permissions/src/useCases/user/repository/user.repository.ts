import { prisma } from "../../../services/prismaclient.service";

export const getUsers = async () => {

    // Getting all users from the database
    const user = await prisma.user.findMany();

    // Returning the users
    
    return user;
}