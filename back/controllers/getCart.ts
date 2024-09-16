import { PrismaClient } from "@prisma/client";

export async function getCartController(req: any, res: any) {
    const prisma = new PrismaClient();

    try {
        const userId = Number(req.params.userId);

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const cart = await prisma.cart.findUnique({
            where: {
                userId: userId,
            },
            include: {
                items: {
                    include: {
                        productItem: true,
                    },
                },
            },
        });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.status(200).json({
            message: "Cart received",
            cart
        });

    } catch (error: any) {
        res.status(500).json({ error: error.toString() });
    }
}
