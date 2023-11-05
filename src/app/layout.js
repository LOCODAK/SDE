import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from './Components/NavBar'
import Footer from "./Components/Footer";
import './Components/components.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className={inter.className}>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
