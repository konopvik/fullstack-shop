import { PrismaClient } from "@prisma/client";

export async function getProductByNameController(req: any, res: any) {

    const prisma = new PrismaClient()

    try {
        const { productName } = req.params;

        if (!productName) {
            return res.status(400).json({ message: "Product name is required" });
        }

        const products = await prisma.product.findMany({
            where: {
                name: {
                    contains: productName,
                    mode: 'insensitive'
                }
            }
        });

        if (products.length === 0) {
            return res.status(404).json({
                message: "No products found with the specified name",
            });
        }
        res.status(200).json({
            message: "Products retrieved",
            products: products
        });
    } catch (error: any) {
        res.status(500).json({ error: error.toString() });
    }
}