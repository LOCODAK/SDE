import React from 'react'
import  Link from "next/link";
import {BiLogoFacebookSquare, BiLogoPinterest} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'
import {RiTwitterXFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <div>
      <footer class="footer">
            <div class="container">
              <div class="row">
                <div class="footer-col">
                  <h4>company</h4>
                  <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                  </ul>
                </div>
                <div class="footer-col">
                  <h4>get help</h4>
                  <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">shipping</a></li>
                    <li><a href="#">returns</a></li>
                    <li><a href="#">order status</a></li>
                    <li><a href="#">payment options</a></li>
                  </ul>
                </div>
                <div class="footer-col">
                  <h4>online shop</h4>
                  <ul>
                    <li><a href="#">Food</a></li>
                    <li><a href="#">Shampoo</a></li>
                    <li><a href="#">Bowl</a></li>
                    <li><a href="#">Toys</a></li>
                  </ul>
                </div>
                <div class="footer-col">
                 <h4>follow us</h4>
                  <div class="social-links">
                    <Link className="social-link-elements" href="https://www.facebook.com/">
                        <BiLogoFacebookSquare className="social-link-icon" />
                      </Link>
                      <Link className="social-link-elements" href="https://www.instagram.com/"> 
                        <BsInstagram className="social-link-icon" />
                      </Link>
                      <Link className="social-link-elements" href="https://in.pinterest.com/">
                        <BiLogoPinterest className="social-link-icon" />
                      </Link>
                      <Link className="social-link-elements" href="https://twitter.com/i/flow/login">
                        <RiTwitterXFill className="social-link-icon" />
                      </Link>
                  </div> 
                </div>
              </div>
            </div>
         </footer>
    </div>
  )
}

export default Footer