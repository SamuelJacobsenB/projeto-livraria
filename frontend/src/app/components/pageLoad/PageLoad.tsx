"use client";
//------------------------------------------------------
import { useEffect, useRef } from 'react';
//------------------------------------------------------
import Loader from '../loader/Loader';
//------------------------------------------------------
import './PageLoad.css';
//------------------------------------------------------
const PageLoad = () => {
    const pageLoad: any = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            pageLoad.current.style.display = 'none';
        }, 1000)
      }, [])

    return (
        <div className='page_loader' ref={pageLoad}>
            <Loader/>
        </div>
    );
};
//------------------------------------------------------
export default PageLoad;