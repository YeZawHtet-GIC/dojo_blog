import { Link } from 'react-router-dom';
import React from 'react'

function BlogList({ blogs }) {
  return (
    <div className="container bg-dark p-3 rounded">
      {blogs.map(blog => (
        <div className="card mb-2 text-center" key={blog.id} >
          <Link className='nav-link' to={`/blogs/${blog.id}`}>
            <h2 className="text-warning">{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;