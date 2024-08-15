"use client";
//------------------------------------------------------
import { useState, useEffect, useRef, useCallback } from 'react';
import { useCookies } from 'react-cookie';
//------------------------------------------------------
import FlashCard from '../flashCard/FlashCard';
import Signin from '../signin/Signin';
import LoadImage from '../loadImage/LoadImage';
//------------------------------------------------------
import { IoPerson } from 'react-icons/io5';
//------------------------------------------------------
import api from '@/services/api';
import userVerify from '@/services/userVerify';
//------------------------------------------------------
import classNameProps from '@/types/classNameProps';
//------------------------------------------------------
import './Profile.css';
//------------------------------------------------------
const Profile = (props: classNameProps) => {
    const [ cookie ] = useCookies<string>();
    const profileImage: any = useRef();
    const profileIcon: any = useRef();
    const [ profileUrl, setProfileUrl ] = useState<string>('');

    const closeFlash = useCallback((): void => {
      const flashCard: any = document.querySelector('.flash_profile');
      flashCard.style.display = 'none';

      const flashUserCard: any = document.querySelector('.flash_user');
      flashUserCard.style.display = 'none';
    }, []);

    const activeFlashSignIn = (): void => {
      const flashCard: any = document.querySelector('.flash_profile');
      flashCard.style.display = 'flex';
    };

    const activeFlashUser = (): void => {
      const flashCard: any = document.querySelector('.flash_user');
      flashCard.style.display = 'flex';
    };

    const handleGetUserProfile = useCallback(async() => {
      const verify = await userVerify(cookie.token);

      if(verify.success_msg){
          const getProfile: any = await api.post('/get/profile', {token: cookie.token});

          if(getProfile.data.profile){
            profileIcon.current.style.display = 'none';
            setProfileUrl(getProfile.data.profile);
          } else {
            console.log(getProfile);
            profileImage.current.style.display = 'none';
          };
      } else {
        profileImage.current.style.display = 'none';
      };
    }, [cookie]);

    const handleUserVerify = async() => {
        const verify = await userVerify(cookie.token);

        if(verify.error_msg){
          activeFlashSignIn();
        } else {
          activeFlashUser();
        };
    };

    useEffect(()=>{
      closeFlash();
      handleGetUserProfile();
    }, [closeFlash, handleGetUserProfile]);

    return (
        <>
            <FlashCard className='flash_profile'>
              <Signin/>
            </FlashCard>
            <FlashCard className='flash_user'>
              <h1>Ola</h1>
            </FlashCard>
            <div className='profile_area profile' onClick={handleUserVerify}>
              <div ref={profileImage} >
                  <LoadImage src={profileUrl} alt='Profile Image' width={70} height={70} className='profile_image'/>
              </div>
              <div ref={profileIcon}>
                <IoPerson className={`profile ${props.className}`}/>
              </div>
            </div>
        </>
    );
};
//------------------------------------------------------
export default Profile;