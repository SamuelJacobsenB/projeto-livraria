"use client";
//------------------------------------------------------
import { useState, useEffect, useRef } from 'react';
//------------------------------------------------------
import Link from 'next/link';
//------------------------------------------------------
import LoadImage from '../loadImage/LoadImage';
//------------------------------------------------------
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
//------------------------------------------------------
import getBooks from '@/services/getBooks';
//------------------------------------------------------
import bookType from '@/types/bookType';
//------------------------------------------------------
import './Carousel.css';
//------------------------------------------------------
const Carousel = () => {
    const carousel: any = useRef();

    const [ books, setBooks ] = useState<object[]>([]);

    useEffect(() => {
      getBooks()
        .then((res)=>{
          setBooks(res);
        })
        .catch((err)=>{
          console.log(err);
        });
    }, []);

    const handleLeftClick = (evt: any): void => {
        evt.preventDefault();
        carousel.current.scrollLeft -= 260
    }; 

    const handleRightClick = (evt: any): void => {
        evt.preventDefault();
        carousel.current.scrollLeft += 260
    }; 

    if(books.length > 2){
        return (
            <div className="carousel_container">
            <h2>Confira os principais livros:</h2>
            <div className='carousel' ref={carousel}>

                {
                    books.map((book, i)=>{
                        const { id, picture, name, author } = book as bookType;
                        return (

                                <div className="item" id={i.toString()} key={id}>
                                    <div className="item_img">
                                        <LoadImage src={picture} alt={name} width={180} height={240} className='book_img'/>
                                    </div>
                                    <div className="info">
                                        <h3 className='book_name'>{name}</h3>
                                        <h3 className='author'>Autor: {author}</h3>
                                        <Link href={`/home/${id}`}>
                                            <button className='btn_borrow'>Ver mais</button>
                                        </Link>
                                    </div>
                                </div>

                        );
                    })
                }

            </div>
                <div className="buttons">
                    <button className='btn_scroll' onClick={handleLeftClick}>
                        <IoChevronBackOutline className='btn_icon'/>
                    </button>
                    <button className='btn_scroll' onClick={handleRightClick}>
                        <IoChevronForward className='btn_icon'/>
                    </button>
                </div>
            </div>
        );
    };
};

export default Carousel;