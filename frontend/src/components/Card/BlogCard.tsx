import { Link } from "react-router-dom"

type props = {
    authrname: string,
    Date: string,
    title: string,
    content: string,
    id:number
}

export const Card = ({ authrname, Date, title, content,id }: props) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="mx-12  p-4 border-b border-slate-200 w-screen max-w-screen-md cursor-pointer">
                <div className=" flex pb-2">
                    <div className="flex flex-col justify-center">
                        <Avatar name={authrname}></Avatar>
                    </div>
                    <div className="text-sm font-semibold flex flex-col justify-center pl-2">
                        {authrname}
                    </div>
                    <div className="font-xs text-slate-400 pl-1 ">
                        &#x2022;
                    </div>
                    <div className="font-normal text-sm text-slate-400 flex flex-col justify-center pl-1">
                        {Date}
                    </div>
                </div>
                <div className="text-xl font-bold pb-1 ">
                    {title}
                </div>
                <div className="font-semibold pb-2">
                    {content.length < 100 ? content : content.slice(0, 100) + "..."}
                </div>
                <div className="text-slate-400 ">
                    {Math.ceil(content.length / 100) + " min read"}
                </div>
            </div>
        </Link>
    )
}

export function Avatar({ name, size = "small" }: { name: string, size?: "big" | "small" }) {
    return (
        <>
            <div className={`relative inline-flex items-center justify-center  ${size === "small" ? "w-6 h-6" : "w-10 h-10"}  overflow-hidden rounded-full bg-gray-600`}>
                <span className={` ${size === "small" ? "text-xs" : "text-md"} text-gray-600 dark:text-gray-300`}>
                    {name[0]}
                </span>
            </div>
        </>
    )
}