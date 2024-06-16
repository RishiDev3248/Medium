import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const navigate = useNavigate()
    return (
        <div className="h-screen">
            <div>
                <Appbar></Appbar>
            </div>
            <div className="flex justify-center pt-8 h-5/6">
                <div className="max-w-screen-lg w-full ">
                    <div>
                        <input onChange={(e) => { settitle(e.target.value) }} type="text" className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5" placeholder="Title"></input>
                    </div>
                    <div>
                        <Texteditor onChange={(e) => { setcontent(e.target.value) }}></Texteditor>
                    </div>
                    <div>
                        <button onClick={async () => {
                            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,
                                {
                                    title,
                                    content
                                },
                                {
                                    headers:{
                                        Authorization:localStorage.getItem("token")
                                    }
                                })
                            navigate(`/blog/${response.data.id}`)
                        }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Publish post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Texteditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (
        <div >
            <form>
                <div className="w-full mb-4 border-0  rounded-lg bg-green-200 ">
                    <div className="bg-white h-full rounded-lg">
                        <textarea onChange={onChange} className="block w-full h-52 p-2.5  text-sm text-gray-800 bg-white border border-gray-300  rounded-lg" placeholder="Write an article..." required ></textarea>
                    </div>
                </div>
            </form>
        </div>
    )
}
