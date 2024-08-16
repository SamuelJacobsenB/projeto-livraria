"use client";
//------------------------------------------------------
import { useState, useEffect, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import { useCookies } from "react-cookie";
//------------------------------------------------------
import Link from "next/link";
//------------------------------------------------------
import LoadImage from "@/app/components/loadImage/LoadImage";
//------------------------------------------------------
import userVerify from "@/services/userVerify";
import api from "@/services/api";
//------------------------------------------------------
import readedBookType from "@/types/readedBookType";
//------------------------------------------------------
import './page.css';
import bookType from "@/types/bookType";
//------------------------------------------------------
const Informations = () => {
  const router = useRouter();
  const params = useParams();
  const id: number = Number(params.id);
  const [ cookie ] = useCookies();

  const [ readedBooks, setReadedBooks ] = useState<string[]>();

  const userVerifyToken = useCallback(async()=>{
    const verify = await userVerify(cookie.token);

    if(verify.error_msg){
        router.push('/home');
    };
  }, [cookie, router]);
  
  const getReadedBooks = useCallback(async()=>{
    const res = await api.post(`/get/readed/${id}`, { token: cookie.token });

    if(res.data.books){
      const books: string[] = res.data.books.split(';');
      console.log(books)
      setReadedBooks(books);
    } else if(res.data.books == undefined){
      //Anything will happen
      console.log(res.data.error_msg)
    } else { 
      console.log(res.data.error_msg);
      router.push('/home');
    };
  }, [id, router, cookie]);

  const searchBook = async(bookId: number) => {
    try {
      const res = await api.get(`/get/book/${bookId}`);

      if(res.data.book){
        return res.data.book;
      } else {
          console.log(res.data.error_msg);
      };
    } catch(err){
      console.log(err);
    };
  };

  useEffect(()=>{
    userVerifyToken();
    getReadedBooks();
  }, [userVerifyToken, getReadedBooks]);

  if(readedBooks){

    return (
      <div className="profile_informations">
        <h1>Livros já lidos:</h1>
        <div className="readed_books">
          {
            readedBooks.map(async(book, i)=>{
              const bookParts: string[] = book.split(':');
              const bookId: number = Number(bookParts[0]);
              const bookEvaluation: number = Number(bookParts[1]);

              let { picture, name } = await searchBook(bookId) as bookType; 

              return (

                  <div className="item" id={i.toString()} key={id}>
                    <div className="item_img">
                        <LoadImage src={picture} alt={name} width={180} height={240} className='book_img'/>
                    </div>
                    <div className="evaluation">
                        <p>{bookEvaluation}</p>
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
  } else {
    return (
      <h1 className="no_books">Você ainda não leu nenhum livro.</h1>
    );
  };
};
//------------------------------------------------------
export default Informations;