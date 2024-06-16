import { Link } from "react-router-dom"
export const AuthHeader = ({ type }: { type: "signup" | "signin" }) => {
    return (
        
            <div className="w-7/12  ">
                <div className="font-bold text-4xl text-center">
                    Create an account
                </div>
                <div className="text-gray-500 text-center font-normal text-lg pb-5">
                    {type === "signup" ? "Already have an account?" : "Dont have an account"}
                    {type === "signup" ? <Link className="pl-2 underline" to={"/signin"}>Login</Link> : <Link className="pl-2 underline" to={"/signup"}>Create</Link>}
                </div>
            </div>
     
    )
}