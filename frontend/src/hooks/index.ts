import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blogtype {
    "title":string,
    "content":string,
    "id":number,
    "user":{
        "username":string,
    }
}

export const useBlog =({id}:{id:string})=>{
    const [loading,setLoading] =useState(true);
    const [Blog,setBlog] =useState<Blogtype>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}` , {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlog(response.data.Id)
            setLoading(false)
        })
    },[id])
    return {
        loading,
        Blog
    }
}

export const useBlogs =()=>{
    const [loading,setLoading] =useState(true);
    const [Blogs,setBlogs] =useState<Blogtype[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk` , {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlogs(response.data.blog)
            setLoading(false)
        })
    },[])
    return {
        loading,
        Blogs
    }
}