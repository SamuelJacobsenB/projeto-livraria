"use server";
//------------------------------------------------------
import { useRouter } from "next/navigation";
//------------------------------------------------------
import api from "./api";
//------------------------------------------------------
export default async function getReadedBooks (router: any, id: any, cookie: any, setReadedBooks: any){
    
    const res = await api.post(`/get/readed/${id}`, { token: cookie.token });
    console.log(res);
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
};