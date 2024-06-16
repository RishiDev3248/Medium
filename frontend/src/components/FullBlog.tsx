import { Blogtype } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./Card/BlogCard"

export const Fullblog = ({ blog }: { blog: Blogtype }) => {
    return (
        <div>
            <Appbar></Appbar>
            <div className="grid grid-cols-12 px-36 w-full pt-10 flex justify-center">
                <div className="col-span-8 ">
                    <div className="text-5xl font-extrabold max-w-screen-xl pb-3">
                        {blog.title}
                    </div>
                    <div className="pb-3 text-slate-500">
                        Posted on Dec 2, 2023
                    </div>
                    <div className="font-semibold text-gray-600">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="pb-5 text-slate-700 font-semibold">
                        Author
                    </div>
                    <div className="flex ">
                        <div className="flex flex-col justify-center">
                            <Avatar name={blog.user.username} size="big"></Avatar>
                        </div>
                        <div className="pl-3">
                            <div className="font-bold text-xl">
                            {blog.user.username}
                            </div>
                            <div className="pt-3 text-slate-500">
                                Random catch phrase about the author's ability to grab the user's attention
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}