"use client";
//------------------------------------------------------
import { useState } from 'react';
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

  const [ showSignUp, setShowSignUp ] = useState<boolean>(false);
  const toggleShowSignUp = (): void => {
    const flashCard: any = document.querySelector('.signup_card');
    if(showSignUp == false){
      flashCard.style.display = 'flex';
    } else {
      flashCard.style.display = 'none';
    };

  };

  const [ showSignIn, setShowSignIn ] = useState<boolean>(false);
  const toggleShowSignIn = (): void => {
    const flashCard: any = document.querySelector('.signin_card');
    if(showSignIn == false){
      flashCard.style.display = 'flex';
    } else {
      flashCard.style.display = 'none';
    };
  };

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

            <FlashCard className={showSignUp ? 'signup_card ' : 'signup_card closed'}>
              <Signup/>
            </FlashCard>
            
            <FlashCard className={showSignIn ? 'signin_card ' : 'signin_card closed'}>
              <Signin/>
            </FlashCard>

        </div>

    </nav>
  );
};
//------------------------------------------------------
export default NavBar;