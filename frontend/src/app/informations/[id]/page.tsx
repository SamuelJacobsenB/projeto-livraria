"use client";
//------------------------------------------------------
import { useState, useEffect, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import { useCookies } from "react-cookie";
//------------------------------------------------------
import Link from "next/link";

import ReactStars from "react-stars";
//------------------------------------------------------
import LoadImage from "@/app/components/loadImage/LoadImage";
//------------------------------------------------------
import api from "@/services/api";
//------------------------------------------------------
import bookType from "@/types/bookType";
//------------------------------------------------------
import './page.css';
//------------------------------------------------------
const Informations = () => {
  const router = useRouter();
  const params = useParams();
  const id: number = Number(params.id);
  const [ cookie ] = useCookies();

  const [ readedBooks, setReadedBooks ] = useState<string[]>();
  const [ bookDetails, setBookDetails ] = useState<bookType[]>([]);

  const getReadedBooks = useCallback(async()=>{
    const res = await api.post(`/get/readed/${id}`, { token: cookie.token });

    if(res.data.books){
      const books: string[] = res.data.books.split(';');
      books.pop();
      setReadedBooks(books);
    } else if(res.data.books == undefined){
      //Anything will happen
      console.log(res.data.error_msg)
    } else { 
      console.log(res.data.error_msg);
      router.push('/home');
    };
  }, [id, router, cookie]);

  const searchBook = useCallback(async(bookId: number) => {
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
  }, []);

  useEffect(()=>{
    getReadedBooks();
  }, [getReadedBooks]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      if (readedBooks) {
        const details = await Promise.all(readedBooks.map(async(book) => {
          const bookParts: string[] = book.split(':');
          const bookId: number = Number(bookParts[0]);
          const bookEvaluation: number = Number(bookParts[1]);
          
          const bookInformations = await searchBook(bookId);
          const allBookInformations = { evaluation: bookEvaluation, ...bookInformations }
          return allBookInformations;
        }));
        setBookDetails(details);
      }
    };

    fetchBookDetails();
  }, [readedBooks, searchBook]);

  if(readedBooks){
    return (
      <div className="profile_informations">
        <h1>Livros já lidos:</h1>
        <div className="readed_books">
          {
            bookDetails.map((book, i) => (
              <div className="item" id={i.toString()} key={i}>
                <div className="item_img">
                    <LoadImage src={book.picture} alt={book.name} width={180} height={240} className='book_img'/>
                </div>
                <div className="evaluation">
                  <ReactStars
                      count={5}
                      edit={false}
                      value={book.evaluation}
                      size={34}
                      color2='orange'
                      half={false}
                      className='stars'
                    />
                    <Link href={`/home/${id}`}>
                      <button className='btn_borrow'>Ver mais</button>
                    </Link>
                </div>
              </div>
            ))
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