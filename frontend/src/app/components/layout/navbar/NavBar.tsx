"use client";
//------------------------------------------------------
import { useState } from 'react';
//------------------------------------------------------
import Link from 'next/link';
//------------------------------------------------------
import { IoMenu } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
//------------------------------------------------------
import './NavBar.css';

//------------------------------------------------------
const NavBar = () => {

  const [ active, setActive ] = useState<boolean>(false);

  const toggleActive = (): void => setActive(!active);

  return (
    <nav className='navbar'>
        <div className='burguer'>
          <IoMenu className={active ? 'closed' : 'icon opend'} onClick={toggleActive}/>
          <IoChevronDown className={active ? 'icon opend' : 'closed'}  onClick={toggleActive}/>
        </div>
        <div className={active ? 'link-container opend' : 'link-container closed'}>
            <div className='links'>
                <Link href={'/home'} className='nav-link'>Home</Link>
                <Link href={'/signin'} className='nav-link'>SignIn</Link>
                <Link href={'/signup'} className='nav-link'>SignUp</Link>
            </div>
        </div>
    </nav>
  );
};
//------------------------------------------------------
export default NavBar;