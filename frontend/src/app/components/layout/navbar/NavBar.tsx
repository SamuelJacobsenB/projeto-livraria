"use client";
//------------------------------------------------------
import { useState, useEffect, useCallback } from 'react';
//------------------------------------------------------
import Link from 'next/link';
//------------------------------------------------------
import FlashCard from '../../flashCard/FlashCard';
import Signin from '@/app/components/signin/Signin';
import Signup from '@/app/components/signup/Signup';
//------------------------------------------------------
import { IoMenu } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
//------------------------------------------------------
import './NavBar.css';
//------------------------------------------------------
const NavBar = () => {
  const [ active, setActive ] = useState<boolean>(false);
  const toggleActive = (): void => setActive(!active);

  const closeFlashs = useCallback(()=>{
    const flashSignUp: any = document.querySelector('.flash_signup');
    flashSignUp.style.display = 'none';

    const flashSignIn: any = document.querySelector('.flash_signin');
    flashSignIn.style.display = 'none';
  }, []);

  const activeFlashSignUp = (): void => {
    const flashCard: any = document.querySelector('.flash_signup');
    flashCard.style.display = 'flex';
  };

  const activeFlashSignIn = (): void => {
    const flashCard: any = document.querySelector('.flash_signin');
    flashCard.style.display = 'flex';
  };

  useEffect(()=>{
    closeFlashs();
  }, [closeFlashs]);

  return (
    <nav className='navbar'>

        <div className='burguer'>
          <IoMenu className={active ? 'closed' : 'icon opend'} onClick={toggleActive}/>
          <IoChevronDown className={active ? 'icon opend' : 'closed'}  onClick={toggleActive}/>
        </div>

        <div className={active ? 'link_container opend' : 'link_container closed'}>
            <div className='links'>
                <Link href={'/home'} className='nav-link'>Home</Link>
                <p className='nav-link' onClick={activeFlashSignIn}>SignIn</p>
                <p className='nav-link' onClick={activeFlashSignUp}>SignUp</p>
            </div>

            <FlashCard className={'flash_signup'}>
              <Signup/>
            </FlashCard>
            <FlashCard className={'flash_signin'}>
              <Signin/>
            </FlashCard>
        </div>

    </nav>
  );
};
//------------------------------------------------------
export default NavBar;