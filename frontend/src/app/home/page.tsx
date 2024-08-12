"use client";
import FlashCard from '../components/flashCard/FlashCard';
//------------------------------------------------------
import { useState, useEffect } from 'react';
//------------------------------------------------------
import Link from 'next/link';
//------------------------------------------------------
import LoadImage from '../components/loadImage/LoadImage';
import Carousel from '../components/carousel/Carousel';
//------------------------------------------------------
import getBooks from '@/services/getBooks';
//------------------------------------------------------
import bookType from '@/types/bookType';
//------------------------------------------------------
import './page.css';
//------------------------------------------------------
const Home = () => {
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

  return (
    <div className='home'>
      <FlashCard/>
      <h1>Seja bem-vindo:</h1>
      <Carousel/>
      <h1>Veja todos os livros listados abaixo:</h1>
      <div className="book_list">
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
    </div>
  );
};
//------------------------------------------------------
export default Home;