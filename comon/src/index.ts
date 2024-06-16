import z from 'zod'

//signup
export const signupInputs = z.object({
    email:z.string().email(),
    username:z.string().optional(),
    password : z.string().min(6)
})

//signin
export const signinInputs = z.object({
    email:z.string().email(),
    password : z.string().min(6)
})

//create
export const createInputs = z.object({
    title : z.string(),
    content : z.string()
})

// update
export const updateInputs = z.object({
    title : z.string(),
    content : z.string(),
    id: z.number()
})



export type SignupInputs = z.infer< typeof signupInputs >
export type SigninInputs = z.infer< typeof signinInputs >
export type CreateInputs = z.infer< typeof createInputs >
export type UpdateInputs = z.infer< typeof updateInputs >