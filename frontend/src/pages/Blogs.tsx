import { Appbar } from "../components/Appbar"
import { Card } from "../components/Card/BlogCard"
import { AppbarSkeletion } from "../components/Skeletion/AppbarSkeletion";
import { BlogSkeletion } from "../components/Skeletion/BlogsSkeletion";
import { useBlogs } from "../hooks"


export const Blogs = () => {
    const { loading, Blogs } = useBlogs();

    if (loading) {
        return (
            <div>
                <AppbarSkeletion></AppbarSkeletion>
                <div className="flex justify-center ">
                    <div>
                        <BlogSkeletion></BlogSkeletion>
                        <BlogSkeletion></BlogSkeletion>
                        <BlogSkeletion></BlogSkeletion>
                        <BlogSkeletion></BlogSkeletion>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div >
            <div>
                <Appbar></Appbar>
            </div>
            <div className="flex justify-center ">
                <div>
                    {Blogs.map(blog =>
                        <Card
                            authrname={blog.user.username}
                            Date={"june 11, 2024"}
                            title={blog.title}
                            content={blog.content}
                            id={blog.id}
                        ></Card>
                    )}
                </div>
            </div>
        </div>
    )
} 