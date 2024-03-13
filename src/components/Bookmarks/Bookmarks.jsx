import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({ bookmarks, readTime }) => {

    return (
        <div className='col-span-1'>
            <div className="p-3 rounded-lg space-y-2 h-fit bg-slate-200 font-bold mb-4">
                <h1>Spent Time on read: {readTime}</h1>
            </div>
            <div className="p-3 rounded-lg space-y-2 h-fit bg-slate-200 font-bold">
                <h1>Bookmarked Blogs: {bookmarks.length}</h1>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object,
    readTime: PropTypes.num,

}

export default Bookmarks;