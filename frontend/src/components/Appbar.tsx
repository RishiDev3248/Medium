import { Link } from "react-router-dom";
import { Avatar } from "./Card/BlogCard";

export function Appbar() {
    return (
        <div className="border-b border-slate-200 flex justify-between py-2 px-10">
            <div className="flex flex-col justify-center cursor-pointer">
                <Link to={'/blogs'}>
                    Medium
                </Link>
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex flex-row justify-center">
                    <div>
                        <Link to={"/publish"}>
                            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2  mr-4">New Post</button>
                        </Link>
                    </div>
                    <div>
                        <Avatar size="big" name="Rishi"></Avatar>
                    </div>
                </div>
            </div>
        </div>
    )
}