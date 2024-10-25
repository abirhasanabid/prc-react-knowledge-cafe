import { useState } from "react";
import Blog from "../Blog/Blog";
import { useEffect } from "react";

const Blogs = ({handlerBookmark}) => {

    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('../../../public/blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog=><Blog handlerBookmark={handlerBookmark} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;