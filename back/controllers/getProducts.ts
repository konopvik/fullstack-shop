import { PrismaClient } from "@prisma/client";

export async function getProductsController(req: any, res: any) {
    try {
        const prisma = new PrismaClient();

        // Retrieve products from the database
        const products = await prisma.product.findMany();

        // Send the response only once
        res.status(200).json({
            message: "Products retrieved",
            customers: products
        });
    } catch (error: any) {
        // Handle the error
        res.status(500).json({ error: error.toString() });
    }
}
