import { AuthHeader } from "./AuthComponents/AuthHeader"
import { Lablledinputs } from "./AuthComponents/LabelledInputs"
import { AuthButton } from "./AuthComponents/authButton"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { SignupInputs } from "@rishicodes3248/medium-common"
import axios from "axios"
import { BACKEND_URL } from "../config"
export const SignupAuth = () => {   

    const navigate = useNavigate();
    const [signupPostInputs, setsignupPostInputs] = useState<SignupInputs>({
        email: "",
        username: "",
        password: ""
    })
    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup` ,signupPostInputs )
            const jwt = response.data;
            localStorage.setItem("token",jwt)
            navigate("/Blogs")
        }catch(e){
            console.log(e)
            alert("Error While Signing up")
        }
    }
    return (<div className="h-screen flex flex-col justify-center items-center ">
        <AuthHeader type="signup"></AuthHeader>
        <Lablledinputs label="Username" placeholder="Enter your username" onChange={(e) => {
            setsignupPostInputs({
                ...signupPostInputs,
                username: e.target.value
            })
        }}></Lablledinputs>
        <Lablledinputs label="Email" placeholder="m@gmail.com" onChange={(e) => {
            setsignupPostInputs({
                ...signupPostInputs,
                email: e.target.value
            })
        }}></Lablledinputs>
        <Lablledinputs label="Password" types="password" placeholder="" onChange={(e) => {
            setsignupPostInputs({
                ...signupPostInputs,
                password: e.target.value
            })
        }}></Lablledinputs>
        <AuthButton type="signup" sendRequest={sendRequest}></AuthButton>
        
    </div>)
}