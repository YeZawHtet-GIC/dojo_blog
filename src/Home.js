import BlogList from "./BlogList";
import useFetch from "./useFetch";
import React from 'react'

function Home() {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="col-md-6 offset-3">
      { error && <div>{ error }</div> }
      { isPending && <div className="text-warning text-center fs-1">Loading...</div> }
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;
