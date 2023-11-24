import db from "/src/app/blog/lib/db";
import { verifyJwtToken, verifyToken } from '/src/app/blog/lib/jwt'
import Blog from "../../blog/models/Blog";

export async function GET(req) {
    await db.connect()

    try {
        const blogs = await Blog.find({}).limit(16).populate("authorID")
        // console.log(JSON.parse(JSON.stringify(blogs)))
        return new Response(JSON.stringify(blogs), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

export async function POST(req) {
    await db.connect()
    const accessToken = req.headers.get("authorization")
    const token = accessToken.split(' ')[1]

    const decodedToken = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const body = await req.json()
        const newBlog = new Blog(body)
        await newBlog.save()
        // console.log(newBlog)
        // const newBlog = await Blog.create(body)
        return new Response(JSON.stringify(newBlog), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}
