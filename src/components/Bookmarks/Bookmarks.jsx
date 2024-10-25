import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readTime }) => {
    // console.log(readTime)
    return (
        <div className="md:w-1/3  bg-black/10 rounded-md rounded-md] ">
            <div className="p-4 mt-3 mx-4">
                <h1 className="text-red-700">Spent time on read :{readTime}</h1>
            </div>
            <h1 className="font-bold text-xl mx-4 mt-3"> Bookmarked Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark readTime={readTime} key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;