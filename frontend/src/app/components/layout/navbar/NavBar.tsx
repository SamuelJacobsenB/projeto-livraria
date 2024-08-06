"use client";
//------------------------------------------------------
import { useState } from 'react';
//------------------------------------------------------
import Link from 'next/link';
//------------------------------------------------------
import { BiMenu } from 'react-icons/bi';
//------------------------------------------------------
import './NavBar.css';
//------------------------------------------------------
const NavBar = () => {

  const [ active, setActive ] = useState<boolean>(false);

  const toggleActive = (): void => setActive(!active);

  return (
    <nav className='navbar'>
        <div className='burguer' >
          <BiMenu className='icon' onClick={toggleActive}/>
        </div>
        <div className={active ? 'links opend' : 'links closed'}>
            <div>
                <Link href={'/home'}>Home</Link>
                <Link href={'/signin'}>SignIn</Link>
                <Link href={'/signup'}>SignUp</Link>
            </div>
        </div>
    </nav>
  );
};
//------------------------------------------------------
export default NavBar;