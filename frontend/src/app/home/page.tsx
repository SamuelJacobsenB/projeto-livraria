"use client";
//------------------------------------------------------
import { useState, useEffect, useCallback } from 'react';
import { useCookies } from 'react-cookie';
//------------------------------------------------------
import Link from 'next/link';
//------------------------------------------------------
import ReactStars from 'react-stars';
//------------------------------------------------------
import LoadImage from '../components/loadImage/LoadImage';
import Carousel from '../components/carousel/Carousel';
import Signin from '../components/signin/Signin';
import FlashCard from '../components/flashCard/FlashCard';
import Button from '../components/button/Button';
//------------------------------------------------------
import { IoAdd } from "react-icons/io5";
//------------------------------------------------------
import api from '@/services/api';
import userVerify from '@/services/userVerify';
import getBooks from '@/services/getBooks';
//------------------------------------------------------
import bookType from '@/types/bookType';
//------------------------------------------------------
import './page.css';
//------------------------------------------------------
const Home = () => {
  const [ cookie ] = useCookies();
  const [ books, setBooks ] = useState<object[]>([]);
  const [ rate, setRate ] = useState<number>();

  const setNewRate = (newRate: number): void => {setRate(newRate); console.log(rate)};

  const getAllBooks = useCallback(async()=>{
    await getBooks()
      .then((res)=>{
        setBooks(res);
      })
      .catch((err)=>{
        console.log(err);
      });
  }, []);

  const closeHomeFlashs = useCallback(()=>{
    setTimeout(()=>{
      const flashCards = document.querySelectorAll('.flash_area');
      flashCards.forEach((flashCard: any)=>{
        flashCard.style.display = 'none';
      });
    }, 800);
  }, []);

  useEffect(() => {
    getAllBooks();
    closeHomeFlashs();
  }, [getAllBooks, closeHomeFlashs]);

  return (
    <div className='home'>
      <h1>Seja bem-vindo:</h1>
      <Carousel/>
      <h1>Veja todos os livros listados abaixo:</h1>
      <FlashCard className='flash_signin'>
        <Signin/>
      </FlashCard>
      <div className="book_list">
        {


          books.map((book, i)=>{
            const { id, picture, name, author } = book as bookType;

            const activeFlash = async() => {
              const verify = await userVerify(cookie.token);

              if(verify.success_msg){
                const flashCard: any = document.querySelector(`.flash${id}`);
                flashCard.style.display = 'flex';
              } else {
                const flashCard: any = document.querySelector(`.flash_signin`);
                flashCard.style.display = 'flex';
              };
            };

            const handleSubmitReaded = async() => {
              const res = await api.post('/update/readed', { token: cookie.token, book: { bookId: id, evaluation: rate }});

              if(res.data.success_msg){
                window.location.reload();
              } else {
                console.log(res.data.error_msg);
              };
            };  

            return (

                    <div className="item" id={i.toString()} key={id}>
                        <div>
                          <IoAdd className='add_icon' onClick={activeFlash}/>
                          <FlashCard className={`flash${id}`}>
                            <div className='evaluation_area'>
                              <LoadImage src={picture} alt={name} width={350} height={500}/>
                              <ReactStars
                                count={5}
                                onChange={setNewRate}
                                size={50}
                                color2='orange'
                                half={false}
                                className='stars'
                              />
                              <Button className='submit' onClick={handleSubmitReaded}>Cadastrar avaliação</Button>
                            </div>
                          </FlashCard>
                        </div>
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