import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React from "react";

export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("https://json-server-three-bay.vercel.app/blogs" + id);
 const navigate = useNavigate();
  const handleClick = () => {
    fetch("https://json-server-three-bay.vercel.app/blogs" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="col-md-6 offset-3 text-center bg-dark p-5 rounded text-warning">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <hr/>
          <p>Written by : {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick} className="btn btn-outline-danger mt-3">
            Delete
          </button>
          <button onClick={()=>{
            navigate("/")
          }} className="btn btn-outline-primary mt-3 mx-3">
            Back
          </button>
        </article>
      )}
    </div>
  );
}
