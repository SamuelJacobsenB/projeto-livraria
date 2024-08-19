"use client";
//------------------------------------------------------
import { useState, useRef } from "react";
//------------------------------------------------------
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
//------------------------------------------------------
import './Search.css';
//------------------------------------------------------
const Search = () => {
    const [ searchValue, setSearchValue ] = useState<string>();
    const searchElement: any = useRef();

    const setAllBooksToVisible = (): void => {
        const allBooks: any = document.querySelectorAll('.item');
        if(allBooks){
            for( let i: number = 0; i < allBooks.length; i++){
                allBooks[i].style.display = 'block';
            };
        };
    };

    const handleSearchSubmit = (evt: any): void => {
        evt.preventDefault();

        if(searchValue){
            const bookList: any[] = searchElement.current.nextElementSibling.children;
            for( let i: number = 0; i < bookList.length; i++){
                const bookName: string = bookList[i].lastChild.firstChild.innerText.toLowerCase();
                if(bookName.includes(searchValue.toLowerCase())){
                    const book: any = document.getElementsByClassName(i.toString());
                    if(book) book[0].style.display = 'block';
                } else {
                    const noSearchBook: any = document.getElementsByClassName(i.toString());
                    if(noSearchBook) noSearchBook[0].style.display = 'none';
                };
            };
        } else {
            setAllBooksToVisible();
        };
    };

    return (
        <form className="search" onSubmit={(evt)=>handleSearchSubmit(evt)} ref={searchElement}>
            <button type="submit">
                <IoSearch className="search_icon"/>
            </button>
            <input type="text" name="search_input" id="search_input" value={searchValue} onChange={(el)=>setSearchValue(el.target.value)} placeholder="Pesquisar livro"/>
            <IoClose className="delete_icon" onClick={()=>{setSearchValue(''); setAllBooksToVisible()}}/>
        </form>
    );
};
//------------------------------------------------------
export default Search;