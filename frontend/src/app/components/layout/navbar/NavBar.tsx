"use client";
//------------------------------------------------------
import { useState } from 'react';
//------------------------------------------------------
import Link from 'next/link';
//------------------------------------------------------
import FlashSignup from '../../flashCard/flashSignup/FlashSignup';

import { IoMenu } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
//------------------------------------------------------
import './NavBar.css';
//------------------------------------------------------
const NavBar = () => {
  const [ active, setActive ] = useState<boolean>(false);
  const toggleActive = (): void => setActive(!active);

  const [ showSignUp, setShowSignUp ] = useState<boolean>(false);
  const toggleShowSignUp = (): void => setShowSignUp(true);

  const [ showSignIn, setShowSignIn ] = useState<boolean>(false);
  const toggleShowSignIn = (): void => setShowSignIn(true);

  return (
    <nav className='navbar'>

        <div className='burguer'>

          <IoMenu className={active ? 'closed' : 'icon opend'} onClick={toggleActive}/>
          <IoChevronDown className={active ? 'icon opend' : 'closed'}  onClick={toggleActive}/>

        </div>

        <div className={active ? 'link_container opend' : 'link_container closed'}>

            <div className='links'>

                <Link href={'/home'} className='nav-link'>Home</Link>
                <p className='nav-link' onClick={toggleShowSignIn}>SignIn</p>
                <p className='nav-link' onClick={toggleShowSignUp}>SignUp</p>

            </div>
            <FlashSignup className={showSignUp ? '' : 'closed'}/>
            <FlashSignIn className={showSignIn ? '' : 'closed'}/>
        </div>

    </nav>
  );
};
//------------------------------------------------------
export default NavBar;