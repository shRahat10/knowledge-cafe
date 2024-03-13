import PropTypes from 'prop-types';

const Blog = ({ blog, handleBookmark, handleMarkedRead }) => {
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className="mb-10 space-y-2">
            <img className="rounded-xl w-full" src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <img className="w-12 h-12" src={author_img} alt="" />
                    <div>
                        <h1>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <p>{reading_time} min read</p>
                    <button onClick={()=> handleBookmark(blog)}>
                        <svg width="17.000000" height="19.000000" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs />
                            <path id="Vector" d="M15.5 2.5L15.5 18L8 14.25L0.5 18L0.5 2.5C0.5 1.39 1.3 0.44 2.4 0.32C6.12 -0.11 9.87 -0.11 13.59 0.32C14.69 0.44 15.5 1.39 15.5 2.5Z" stroke="#111111" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a href="">#{hashtag} </a></span>)
                }
            </p>
            <button onClick={()=> handleMarkedRead(reading_time, id)} className='text-blue-600 underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleMarkedRead: PropTypes.func,

}

export default Blog;