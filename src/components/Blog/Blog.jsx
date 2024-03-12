import PropTypes from 'prop-types';

const Blog = ({blog}) => {

    const {title, cover, author_image, author, posted_date, reading_time} = blog;

    const readingTime = reading_time;
    const readingTimeInt = parseInt(readingTime.replace(' mins', ''));

    return (
        <div>
            <img src={cover} alt={`cover picture of ${title}`} />
            <div className='flex justify-between'>
                <div>
                    <img src={author_image} alt={`image of ${author}`} />
                </div>
                <div>
                    <span>{readingTimeInt} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired
}

export default Blog;