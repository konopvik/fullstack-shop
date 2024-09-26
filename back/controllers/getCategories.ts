import { PrismaClient } from "@prisma/client";

export async function getCategoriesController(req: any, res: any) {
    try {
        const prisma = new PrismaClient();

        // Retrieve products from the database
        const categories = await prisma.category.findMany();

        // Send the response only once
        res.status(200).json({
            message: "Categories retrieved",
            categories: categories
        });
    } catch (error: any) {
        // Handle the error
        res.status(500).json({ error: error.toString() });
    }
}
