import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export async function getAuthController(req: any, res: any) {
    const prisma = new PrismaClient();
    const JWT_SECRET: string = process.env.JWT_SECRET || "your_secret_key"
    const { email, password } = req.body

   try {
       const user = await prisma.user.findUnique({
           where: { email }
       });

       if (!user) {
           return res.status(400).json({ message: "Invalid email or password" });
       }

       const isPasswordValid = await bcrypt.compare(password, user.password);
       if (!isPasswordValid) {
           return res.status(400).json({ message: "Invalid email or password" });
       }

       const token = jwt.sign(
           { userId: user.id, role: user.role },
           JWT_SECRET,
           { expiresIn: '1h' }
       );


       res.status(200).json({
           message: "Login successful",
           token
       });

   } catch (error: any) {
       res.status(500).json({ error: error.toString() });
   }
}
