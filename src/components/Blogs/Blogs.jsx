import PropTypes from 'prop-types'
import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleBookmark, handleMarkedRead}) => {
    const [blogs, setBlogs] =  useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="col-span-2">
            {/* <h1>Blogs: {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleMarkedRead={handleMarkedRead}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark: PropTypes.func,
    handleMarkedRead: PropTypes.func
}

export default Blogs;