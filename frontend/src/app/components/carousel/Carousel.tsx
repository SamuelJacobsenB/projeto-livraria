"use client";
//------------------------------------------------------
import { useRef } from 'react';
//------------------------------------------------------
import LoadImage from '../loadImage/LoadImage';
//------------------------------------------------------
import bookType from '@/types/bookType';
//------------------------------------------------------
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
//------------------------------------------------------
import './Carousel.css';
//------------------------------------------------------
const Carousel = () => {
    const carousel: any = useRef();

    const books: object[] = [
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book efef name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book nath45h45me',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book na5g3g3me',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book n34g3 ame',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Bookg3g34h 3g34 name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Bookhrthth4hw45h name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book na45 h4h5me',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Bookwfwf name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Boowfwfk name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Booberge gk name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book nayj6jme',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book name',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
        {
            picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_689402-MLA52530814538_112022-F.jpg',
            name: 'Book nererame',
            price: 59.90,
            description: 'knjongpjnvjwenfjowe jnweofnweojnfowejnfwoejnfwo jfe efefe',
        },
    ];

    const handleLeftClick = (evt: any): void => {
        evt.preventDefault();
        carousel.current.scrollLeft -= 260
    }; 

    const handleRightClick = (evt: any): void => {
        evt.preventDefault();
        carousel.current.scrollLeft += 260
    }; 

    return (
        <div className="carousel_container">
            <h2>Confira os principais livros:</h2>
            <div className='carousel' ref={carousel}>

                {
                    books.map((book, i)=>{
                        const { picture, name, price } = book as bookType;
                        return (

                                <div className="item" id={i.toString()} key={i}>
                                    <div className="item_img">
                                        <LoadImage src={picture} alt={name} width={180} height={240} className='book_img'/>
                                    </div>
                                    <div className="info">
                                        <h3 className='book_name'>{name}</h3>
                                        <h3 className='price'>R$ {price.toFixed(2)}</h3>
                                        <button className='btn_borrow'>Ler livro</button>
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

export default Carousel;