'use client'
import Post from "../post/post"
import "./posts.css"
import { useEffect } from "react"

async function fetchBlogs(){
  const res = await fetch('http://localhost:3000/api/blog', {cache: 'no-store'})
  // console.log(res)
  return res
}

export default function Posts() {  
  const blogs = fetchBlogs()
  // console.log(blogs)

  return (
    <div className="posts">
      {blogs?.length > 0 ? 
      blogs.map((blog) => (
        <Post key={blog._id} img={blog.imageUrl} title={blog.title} text={blog.desc} id={blog._id} />
      ))
      : <h3>No blog posts available</h3>}
   
    </div>
  );
}

