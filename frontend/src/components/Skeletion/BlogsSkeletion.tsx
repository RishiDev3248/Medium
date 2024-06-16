export const BlogSkeletion = () => {
    return (

        <div role="status" className="animate-pulse">

            <div className="mx-12  p-4 border-b border-slate-200 w-screen max-w-screen-md cursor-pointer">
                <div className=" flex pb-2">
                    <div className="flex flex-col justify-center">
                        {/* Avatar */}
                        <svg className="w-6 h-6 me-3 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                    </div>
                    <div className="text-sm font-semibold flex flex-col justify-center pl-2">
                        {/* Name  */}
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
                    </div>
                    {/* dot */}
                    <div className="font-xs text-slate-400 pl-1 ">
                        &#x2022;
                    </div>
                    <div className="font-normal text-sm text-slate-400 flex flex-col justify-center pl-1">
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
                    </div>
                </div>
                <div className="text-xl font-bold pb-1 ">
                    {/* title */}
                    <div className="w-20 h-2.5 bg-gray-200 rounded-full me-3"></div>
                </div>
                <div className="font-semibold pb-2">
                    {/* content */}
                    <div className="h-2.5 bg-gray-300 rounded-full max-w-[640px] mb-2.5"></div>
                </div>
                <div className="text-slate-400 ">
                    {/* read time */}
                    <div className="w-20 h-2.5 bg-gray-200 rounded-full me-3"></div>
                </div>
            </div>
        </div>


    )
}