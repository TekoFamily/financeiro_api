import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const signUpDB = async (email, password, name, age) => {

    try {
        const user = await prisma.user.create({
            data: {
                email,
                password,
                username,
                age
            }
        });
        return user; // Return the created user object
    } catch (error) {
        console.error("Error creating user:", error);
        throw error; // Re-throw the error for handling in the controller
    } finally {
        await prisma.$disconnect();
    }
}