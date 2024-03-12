import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog}) => {

    const {title, cover, author_image, author, posted_date, reading_time, hashtags} = blog;

    const readingTime = reading_time;
    const readingTimeInt = parseInt(readingTime.replace(' mins', ''));

    return (
        <div>
            <img src={cover} alt={`cover picture of ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <img className='w-14 rounded-full' src={author_image} alt={`image of ${author}`} />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <div>{readingTimeInt} min read</div>
                    <button><CiBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map( (hash, idx)=> <span key ={idx}><a href=''>#{hash} </a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired
}

export default Blog;