type AuthProps = {
    type: "signup" | "signin";
    sendRequest: () => Promise<void>;
};
export const AuthButton = ({ type  ,sendRequest}:AuthProps) => {
    
    return (
        <div className="w-7/12">
            <button onClick={sendRequest} className="bg-black w-full hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg">
                {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
        </div>
    )
}