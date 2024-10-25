import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    // console.log(bookmarks)
    return (
        <div className="md:w-1/3  bg-black/10 rounded-md rounded-md] ">
            
            <h1 className="font-bold text-xl mx-4 mt-3"> Bookmarked Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;