import { useState } from "react";
import Blog from "../Blog/Blog";
import { useEffect } from "react";

const Blogs = ({handlerBookmark, handleReadTime }) => {

    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('/blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog=><Blog handleReadTime={handleReadTime} handlerBookmark={handlerBookmark} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;