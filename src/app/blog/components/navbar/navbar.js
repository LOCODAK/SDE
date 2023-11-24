'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import classes from './navbar.module.css'
import profileIcon from '../../images/profileIcon.png'
import { AiOutlineClose } from 'react-icons/ai'
import {signIn, signOut, useSession} from 'next-auth/react'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const {data: session} = useSession()

  const handleShowDropdown = () => setShowDropdown(prev => true)

  const handleHideDropdown = () => setShowDropdown(prev => false)

  const loggedIn = false

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.left}>
          <Link href="/blog">Home</Link>
        </h2>
        <ul className={classes.right}>
          {
            session?.user
              ? (
                <div>
                  <Image onClick={handleShowDropdown} src={profileIcon} width='45' height='45' />
                  {showDropdown && (
                    <div className={classes.dropdown}>
                      <AiOutlineClose className={classes.closeIcon} onClick={handleHideDropdown} />
                      <button onClick={() => {signOut(); handleHideDropdown()}} className={classes.logout}>Logout</button>
                      <Link onClick={handleHideDropdown} href='/blog/create-blog' className={classes.create}>Create</Link>
                    </div>
                  )}
                </div>
              )
              : (
                <>
                  <button onClick={() => {signIn()}} className={classes.login}>Log in</button>
                  <Link href='/blog/register'>Register</Link>
                </>
              )
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar