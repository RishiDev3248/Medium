import { Quote } from "../components/Quote"
import { SignupAuth } from "../components/signupAuth"

export const Signup = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <SignupAuth></SignupAuth>
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    )
} 