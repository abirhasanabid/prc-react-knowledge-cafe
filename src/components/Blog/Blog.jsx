import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";

const Blog = ({ blog,handlerBookmark }) => {
    // console.log(blog);
    const { cover_img, author_img, name, release_date, read_time, title, hashtags } = blog;


    return (
        <div className="mb-10 space-y-5">
            <img className='w-full rounded-lg object-cover' src={cover_img} alt="" />
            <div className="flex items-center justify-between">
                <div className="flex gap-5 items-center">
                    <img className='rounded-full h-14 w-14 object-cover' src={author_img} alt="" />
                    <div className="">
                        <h3>{name}</h3>
                        <p>{release_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span>{read_time} min read</span>
                    <button onClick={()=>handlerBookmark(blog)}><BsBookmarks></BsBookmarks></button>
                </div>
            </div>
            <h1 className='font-bold text-5xl'>{title}</h1>
            <p className='flex gap-5 font-semibold text-gray-500'>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    optionalObject: PropTypes.object
}

export default Blog;