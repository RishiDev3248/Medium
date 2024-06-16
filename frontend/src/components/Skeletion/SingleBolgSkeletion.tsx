import { AppbarSkeletion } from "./AppbarSkeletion"

export const FullblogSkeletion = ()=> {
    return (
        <div>
            {/* <Appbar></Appbar> */}
            <AppbarSkeletion></AppbarSkeletion>
            <div className="grid grid-cols-12 px-36 w-full pt-10 flex justify-center">
                <div className="col-span-8 ">
                    <div className="text-5xl font-extrabold max-w-screen-xl pb-3">
                        {/* {blog.title} */}
                        <div className="w-40 h-2.5 bg-gray-200 rounded-full me-3"></div>
                    </div>
                    <div className="pb-3 text-slate-500">
                        {/* Posted on Dec 2, 2023 */}
                        <div className="w-20 h-2.5 bg-gray-200 rounded-full me-3"></div>
                    </div>
                    <div className="font-semibold text-gray-600">
                        {/* {blog.content} */}
                        <div className="h-2.5 bg-gray-300 rounded-full max-w-[640px] mb-2.5"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full max-w-[640px] mb-2.5"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full max-w-[640px] mb-2.5"></div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="pb-5 text-slate-700 font-semibold">
                        {/* Author */}
                        <div className="w-20 h-2.5 bg-gray-200 rounded-full me-3"></div>
                    </div>
                    <div className="flex ">
                        <div className="flex flex-col justify-center">
                            {/* <Avatar name={blog.user.username} size="big"></Avatar> */}
                            <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </div>
                        <div className="pl-3">
                            <div className="font-bold text-xl">
                            {/* {blog.user.username} */}
                            <div className="w-20 h-2.5 bg-gray-200 rounded-full me-3"></div>
                            </div>
                            <div className="pt-3 text-slate-500">
                                {/* Random catch phrase about the author's ability to grab the user's attention */}
                                <div className="h-2.5 bg-gray-300 rounded-full max-w-[640px] mb-2.5"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full max-w-[640px] mb-2.5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}