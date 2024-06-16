import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { Fullblog } from "../components/FullBlog"
import { FullblogSkeletion } from "../components/Skeletion/SingleBolgSkeletion"

export const Blog = ()=>{
    const {id} = useParams()
    const {loading,Blog} = useBlog({
        id:id||""
    })
    if(loading){
        return(
            <div>
                <FullblogSkeletion></FullblogSkeletion>
            </div>
        )
    }
    return (
        <div>
            {Blog?<Fullblog blog={Blog}></Fullblog>:<div>Loading...</div>}
        </div>
    )
} 