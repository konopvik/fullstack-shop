import jwt from "jsonwebtoken";



export async function authenticateToken(req: any, res: any, next: any) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(401).json({message: "No authorization token"})

    jwt.verify(token, process.env.JWT_SECRET as string, (error: any, decodedToken: any) => {
        if (error) return res.status(403)
        req.userId = decodedToken.userId
        req.role = decodedToken.role
        next()
    })
}