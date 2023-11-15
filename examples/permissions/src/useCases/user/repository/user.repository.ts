import { prisma } from "../../../services/prismaclient.service";

export const getUsers = async () => {
    const user = await prisma.user.findMany();

    return user;
}