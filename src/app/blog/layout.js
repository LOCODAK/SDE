import './globals.css'
import NavBar from '../Components/NavBar'
import Navbar from './components/navbar/navbar'
import Provider from './SessionProvider'



export default function Layout({ children, session }) {
  return (
    <section > 
        <Provider>
            <NavBar />  
            <Navbar classname={'blogNav'}/>
            {children}
        </Provider>
    </section>
  )
}