import './blog.css'
import Header from './components/header/header'
import Posts from './components/posts/posts'
import Sidebar from './components/sidebar/sidebar'
import Navbar from './components/navbar/navbar'
import BlogCard from '/src/app/blog/components/blogCard/BlogCard'



export async function fetchBlogs(){
  const res = await fetch('http://localhost:3000/api/blog', {cache: 'no-store'})

  return res.json()
}


const page = async () => {
  const blogs = await fetchBlogs()


  return (
    <>
      <Header />
      <div className='home'>
        <div className='posts-container'>
          {blogs?.length > 0}
          <div className='blogs-container'>
            {blogs?.length > 0 
            ? blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            )) : <h3>No blogs are currently available</h3>}
          </div>
        </div>
          <Sidebar />
      </div>
    </>
        // <>
        //   <Header className='header' />
        //   <div className="home">
        //     <div className='posts-container'>
        //       <Posts className='posts' />
        //     </div>
        //     <Sidebar className='sidebar' />
        //   </div>
        // </>
  )
}

export default page