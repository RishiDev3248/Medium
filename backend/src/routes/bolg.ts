import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import {createInputs,updateInputs} from '@rishicodes3248/medium-common'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }, Variables:
    {
        userID: string;
    }
}>()

blogRouter.use('/*', async (c, next) => {
    try{
        const authHeader = c.req.header("authorization") || "";
        const user = await verify(authHeader, c.env.JWT_SECRET);
    
        if (user) {
            c.set("userID", user.id as string);
            await next()
        } else {
            c.status(403)
            return c.json({
                msg: "You are not logged in"
            })
        }
    }catch(e){
        c.status(403)
        console.log(e)
        return c.json({
            msg: "You are not logged in"
        })
    }
})


// create
blogRouter.post('/', async (c) => {
    try {
        const body = await c.req.json();
        const {success} = createInputs.safeParse(body)
        if(!success){
            c.status(411)
            return c.json({
                msg:"wrong inputs, Blog cannot be created"
            })
        }
        const userID = c.get("userID")
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())


        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                autherId: Number(userID),
            }
        })

        return c.json({
            id: blog.id
        })
    } catch (e) {
        c.status(403)
        return c.json({
            error: "Error"
        })
    }
})



blogRouter.put('/', async (c) => {
    try {
        const body = await c.req.json();
        const {success} = updateInputs.safeParse(body)
        if(!success){
            c.status(411)
            return c.json({
                msg:"wrong inputs, Blog cannot be updated"
            })
        }
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())


        const blog = await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })

        return c.json({
            id: blog.id
        })
    } catch (e) {
        c.status(403)
        return c.json({
            error: "Cannot Update"
        })
    }
})


blogRouter.get('/bulk', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())


        const blog = await prisma.post.findMany({
            select:{
                title:true,
                content:true,
                id:true,
                 user:{
                    select :{
                        username:true
                    }
                }
            }
        })

        return c.json({
            blog
        })
    } catch (e) {
        c.status(403)
        return c.json({
            error: "Error while bulk"
        })
    }
})

blogRouter.get('/:id', async (c) => {
    try {
        const id = c.req.param("id");

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())


        const blog = await prisma.post.findFirst({
            where: {
                id: Number(id)
            },
            select:{
                id:true,
                title:true,
                content:true,
                user:{
                    select:{
                        username:true
                    }
                }
            }
        })

        return c.json({
            Id: blog
        })
    } catch (e) {
        c.status(403)
        return c.json({
            error: "Error while find one"
        })
    }
})



