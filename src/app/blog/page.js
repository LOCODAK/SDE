import './blog.css'
import Header from './components/header/header'
import Posts from './components/posts/posts'
import Sidebar from './components/sidebar/sidebar'

const page = () => {
  return (
    <>
        <Header className='header' />
        <div className="home">
          <div className='posts-container'>
            <Posts className='posts' />
          </div>
          <Sidebar className='sidebar' />
        </div>
    </>
  )
}

export default page