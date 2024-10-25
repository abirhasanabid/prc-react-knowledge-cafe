
const Bookmark = ({ bookmark}) => {
    const { title } = bookmark;
    return (
        <div className="">
            <div className="bg-white rounded-lg p-4 mt-3 mx-4">
                <h1 className="font-semibold">{title}</h1>
            </div>
        </div>
    );
};

export default Bookmark;