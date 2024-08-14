

"use client";
//------------------------------------------------------
import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
//------------------------------------------------------
import FlashCard from '../flashCard/FlashCard';
import Signin from '../signin/Signin';

import { IoPerson } from 'react-icons/io5';
//------------------------------------------------------
import userVerify from '@/services/userVerify';
//------------------------------------------------------
import classNameProps from '@/types/classNameProps';
//------------------------------------------------------
import './Profile.css';
//------------------------------------------------------
const Profile = (props: classNameProps) => {
    const router = useRouter();
    const [ cookie ] = useCookies<string>();

    const closeFlash = useCallback((): void => {
      const flashCard: any = document.querySelector('.flash_profile');
      flashCard.style.display = 'none';
    }, []);

    const activeFlashSignIn = (): void => {
      const flashCard: any = document.querySelector('.flash_profile');
      flashCard.style.display = 'flex';
    };

    const handleUserVerify = async() => {
        const verify = await userVerify(cookie.token);

        if(verify.error_msg){
            activeFlashSignIn();
        } else {

        };
    };

    useEffect(()=>{
      closeFlash();
    }, [closeFlash]);

    return (
        <>
            <FlashCard className='flash_profile'>
              <Signin/>
            </FlashCard>
            
            <IoPerson className={`profile ${props.className}`} onClick={handleUserVerify}/>
        </>
    );
};
//------------------------------------------------------
export default Profile;