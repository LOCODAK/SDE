import '../../blog.css'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import BlogCard from '/src/app/blog/components/blogCard/BlogCard'



export async function fetchBlogs(){
  const res = await fetch('http://localhost:3000/api/blog', {cache: 'no-store'})

  return res.json()
}


const page = async () => {
    const blogs = await fetchBlogs()
    const trainingBlogs = blogs.filter((blog) => blog.category == 'Adoption')

  return (
    <>
      <Header />
      <div className='home'>
        <div className='posts-container'>
          {trainingBlogs?.length > 0}
          <div className='blogs-container'>
            {trainingBlogs?.length > 0 
            ? trainingBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            )) : <h3>No blogs are currently available</h3>}
          </div>
        </div>
          <Sidebar />
      </div>
    </>
      
  )
}

export default page