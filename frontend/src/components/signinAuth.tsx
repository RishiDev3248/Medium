import { AuthHeader } from "./AuthComponents/AuthHeader"
import { Lablledinputs } from "./AuthComponents/LabelledInputs"
import { AuthButton } from "./AuthComponents/authButton"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { SignupInputs } from "@rishicodes3248/medium-common"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const SigninAuth = () => {

    const navigate = useNavigate();
    const [signinPostInputs, setsigninPostInputs] = useState<SignupInputs>({
        email: "",
        password: ""
    })
    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin` ,signinPostInputs )
            const jwt = response.data;
            console.log(jwt)
            localStorage.setItem("token",jwt.jwt)
            navigate("/Blogs")
        }catch(e){
            console.log(e)
            alert("Error While Signing in")
        }
    }
    return (<div className="h-screen flex flex-col justify-center items-center ">
        <AuthHeader type="signin"></AuthHeader>
        <Lablledinputs label="Email" placeholder="m@gmail.com" onChange={(e) => {
            setsigninPostInputs({
                ...signinPostInputs,
                email: e.target.value
            })
        }}></Lablledinputs>
        <Lablledinputs label="Password" types="password" placeholder="" onChange={(e) => {
            setsigninPostInputs({
                ...signinPostInputs,
                password: e.target.value
            })
        }}></Lablledinputs>
        <AuthButton type="signin" sendRequest={sendRequest}></AuthButton>
    </div>)
} 