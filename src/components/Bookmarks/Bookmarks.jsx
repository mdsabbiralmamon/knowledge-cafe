import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div>
                <h3>Reading Time : {readingTime}</h3>
            </div>
            <h2>Bookmark Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key = {bookmark.id} bookmark={bookmark}></Bookmark>)
                
            }
        </div>
        
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime : PropTypes.number
}

export default Bookmarks;