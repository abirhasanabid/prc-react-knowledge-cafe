import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readTime }) => {
    return (
        <div className="md:w-1/3  bg-black/10 rounded-md rounded-md] ">
            <div className="mx-4 mt-3 bg-purple-500 p-3 rounded-lg text-white">
                <h1 className="font-semibold text-xl">Spent time on read :{readTime}</h1>
            </div>
            <h1 className="font-bold text-xl mx-4 mt-3"> Bookmarked Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark readTime={readTime} key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;