import  Link from "next/link";
import "./sidebar.css";
import Image from 'next/image'
import petAbout from '../../images/petAbout.jpg'
import {BiLogoFacebookSquare, BiLogoPinterest} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'
import {RiTwitterXFill} from 'react-icons/ri'


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <Image
          src={petAbout}
          alt=""
        />
        <p>
        Our aim is to foster a vibrant online community of pet owners, where knowledge, compassion, and shared experiences 
        come together. Together, we create a world where pets and their owners lead happier, healthier lives.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" href="/posts?cat=Life">
              Training
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" href="/posts?cat=Music">
              Nutrition
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" href="/posts?cat=Sport">
              Grooming
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" href="/posts?cat=Style">
              Health
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" href="/posts?cat=Tech">
              Experience
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" href="/posts?cat=Cinema">
              Adoption
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <Link href="https://www.facebook.com/">
            <BiLogoFacebookSquare className="sidebarIcon" />
          </Link>
          <Link href="https://www.instagram.com/"> 
            <BsInstagram className="sidebarIcon" />
          </Link>
          <Link href="https://in.pinterest.com/">
            <BiLogoPinterest className="sidebarIcon" />
          </Link>
          <Link href="https://twitter.com/i/flow/login">
            <RiTwitterXFill className="sidebarIcon" />
          </Link>
        </div>
      </div>
    </div>
  );
}