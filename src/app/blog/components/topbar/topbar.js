import Link from "next/link";
import {BiLogoFacebookSquare, BiLogoPinterest} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'
import {RiTwitterXFill} from 'react-icons/ri'
import "./topbar.css";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
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
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" href="/blog">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link href='#'>  
              ABOUT
            </ Link>
          </li>
          <li className="topListItem">
            <Link href='#'>  
              CONTACT
            </ Link>
            </li>
          <li className="topListItem">
            <Link className="link" href="/blog/pages/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem mainOpt">
            <Link className="link" href="#">
                LOGOUT
            </Link>
          </li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" href="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem mainOpt">
              <Link className="link" href="/blog/pages/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem mainOpt">
              <Link className="link" href="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}