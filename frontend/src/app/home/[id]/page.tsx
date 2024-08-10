"use client";
//------------------------------------------------------
import { useState, useEffect, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useCookies } from 'react-cookie';
//------------------------------------------------------
import Link from 'next/link';
//------------------------------------------------------
import Button from '@/app/components/button/Button';
import LoadImage from '@/app/components/loadImage/LoadImage';
//------------------------------------------------------
import userVerify from '@/services/userVerify';
import api from '@/services/api';
//------------------------------------------------------
import bookType from '@/types/bookType';
//------------------------------------------------------
import './page.css';
//------------------------------------------------------
const ViewMore = () => {
    const router = useRouter();
    const params = useParams();
    const { id } = params;

    const [ cookie, setCookie, removeCookie ] = useCookies<string>();
    
    const [ book, setBook ] = useState<object>({});

    const searchBook = useCallback(async() => {
      try {
        const res = await api.get(`/get/book/${id}`);

        if(res.data.book){
          return res.data.book;
        } else {
            console.log(res.data.error_msg);
        };
      } catch(err){
        console.log(err);
      };
    }, [id]);

    useEffect(()=>{
      searchBook()
        .then((book)=>{
          setBook(book);
        })
        .catch((err)=>{
          console.log(err);
        });

      userVerify(cookie.token, router)
        .then((res)=>{})
        .catch((err)=>{
          console.log('Não autenticado');
          router.push('/home');
        });
    }, [searchBook, router, cookie]);

    if(book){
      const { picture, name, author, year, pages, description, pdf } = book as bookType;

      return (
        <div className='book_info'>
  
          <div className='book_img'>
            <LoadImage src={picture} alt={name} className='book' width={300} height={400}/>
          </div>
          <div className='right'>
            <div className='informations'>
              <h1>{name}</h1>
              <small>Autor: {author}</small>
              <small>Ano: {year}</small>
              <p>{description}</p>
              <p>Número de páginas: {pages}</p>
            </div>
            <Link href={`${pdf}`} download={`${name}.pdf`} target='_blank'>
              <Button className='submit btn_book'>Dowload do livro</Button>
            </Link>
          </div>

        </div>
      );
    };
};
//------------------------------------------------------
export default ViewMore;