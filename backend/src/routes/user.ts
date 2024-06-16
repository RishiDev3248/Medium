import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import {signupInputs,signinInputs} from '@rishicodes3248/medium-common'
type Bindings = {
    DATABASE_URL: string
    JWT_SECRET: string
}

export const userRouter = new Hono<{ Bindings: Bindings }>()



userRouter.post('/signup', async (c) => {

    //prisma talks to the database using below 3 lines  
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const {success} = signupInputs.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({
            msg:"Invalid inputs"
        })
    }
    try {

        const user = await prisma.user.create({
            data: {
                email: body.email,
                username: body.username,
                password: body.password,
            }
        })

        const token = await sign({ id: user.id }, c.env.JWT_SECRET)


        return c.json({ jwt: token })
    } catch (e) {
        c.status(403)
        return c.json({ Error: "Email already in use " })
    }
})



userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const {success} = signinInputs.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({
            msg:"wrong Inputs"
        })
    }
    try {

        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        })

        if (user) {
            const token = await sign({ id: user.id }, c.env.JWT_SECRET)
            return c.json({
                jwt: token
            })
        } else {
            return c.json({
                msg: "Wrong email or password"
            })
        }



    } catch (e) {
        c.status(403)
        return c.json({
            Error: "Error while Sinning in"
        })
    }

})

