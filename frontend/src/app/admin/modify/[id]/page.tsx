"use client";
//------------------------------------------------------
import { useState, useEffect, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import { useCookies } from "react-cookie";
//------------------------------------------------------
import Link from "next/link";
//------------------------------------------------------
import Button from "@/app/components/button/Button";
//------------------------------------------------------
import adminVerify from "@/services/adminVerify";
import api from "@/services/api";
//------------------------------------------------------
import './page.css';
//------------------------------------------------------
const Update = () => {
    const router = useRouter();
    const params = useParams();
    const { id } = params;
    const [ cookie ] = useCookies<string>();

    const [ pictureF, setPicture ] = useState<string>();
    const [ nameF, setName ] = useState<string>();
    const [ authorF, setAuthor ] = useState<string>();
    const [ yearF, setYear ] = useState<number>();
    const [ pagesF, setPages ] = useState<number>();
    const [ descriptionF, setDescription ] = useState<string>();
    const [ pdfF, setPdf ] = useState<string>();

    const searchBook = useCallback(async() => {      
        try {
            await api.get(`/get/book/${id}`)
                .then((res)=>{
                    if(res.data.book){
                        const { book } = res.data;

                        setPicture(book.picture);
                        setName(book.name);
                        setAuthor(book.author);
                        setYear(book.year);
                        setPages(book.pages);
                        setDescription(book.description);
                        setPdf(book.pdf);

                    } else {
                        router.push('/admin/modify');
                    };
                })
                .catch((err)=>{
                    router.push('/admin/modify');
                });
        } catch(err){
            router.push('/admin/modify');
        };
    }, [id, router]);

    const handleSubmit = async(evt: any) => {
        evt.preventDefault();

        const book: object = {
            picture: pictureF,
            name: nameF,
            author: authorF,
            year: yearF,
            pages: pagesF,
            description: descriptionF,
            pdf: pdfF
        };  

        try {
            const res = await api.post('/update/book', book);

            if(res.data.success_msg){
                console.log(res.data.success_msg);
                router.push('/admin', res.data.success_msg);
            } else {
                console.log(res.data.error_msg);
                router.push('/admin/modify', res.data.error_msg);
            };
        } catch(err){
            console.log(err);
        };
    };

    const adminVerifyToken = useCallback(async()=>{
        const verify = await adminVerify(cookie.token);
    
        if(verify.error_msg){
            router.push('/home');
        };
    }, [cookie, router]);

    useEffect(()=>{
        searchBook();
        adminVerifyToken();
    }, [searchBook, adminVerifyToken]);

        return (
            <div className="update">
                <Link href={'/admin'} className='admin_create_modify_link'>Voltar à página principal</Link>

                <h1>Editar livro:</h1>
                <form method="post" onSubmit={(evt)=>handleSubmit(evt)}>
                    <div className="form_control">
                        <label htmlFor="picture">Imagem: </label>
                        <input type="text" name="picture" id="picture" placeholder='Capa do livro' autoFocus required value={pictureF} onChange={(evt)=>setPicture(evt.target.value)}/>
                    </div>
                    <div className="form_control">
                        <label htmlFor="name">Nome do livro: </label>
                        <input type="text" name="name" id="name" placeholder='Nome do livro' required value={nameF} onChange={(evt)=>setName(evt.target.value)}/>
                    </div>
                    <div className="form_control">
                        <label htmlFor="author">Nome do autor: </label>
                        <input type="text" name="author" id="author" placeholder='Nome do autor' value={authorF} onChange={(evt)=>setAuthor(evt.target.value)}/>
                    </div>
                    <div className="form_control">
                        <label htmlFor="year">Ano de criação: </label>
                        <input type="number" name="year" id="year" placeholder='Ano de criação' value={yearF} onChange={(evt)=>setYear(Number(evt.target.value))}/>
                    </div>
                    <div className="form_control">
                        <label htmlFor="pages">Número de páginas: </label>
                        <input type="number" name="pages" id="pages" placeholder='Número de páginas' value={pagesF} onChange={(evt)=>setPages(Number(evt.target.value))}/>
                    </div>
                    <div className="form_control">
                        <label htmlFor="description">Descrição: </label>
                        <textarea name="description" id="description" placeholder='Sua descrição' value={descriptionF}  onChange={(evt)=>setDescription(evt.target.value)}></textarea>
                    </div>
                    <div className="form_control">
                        <label htmlFor="pdf">Link do PDF: </label>
                        <input type="text" name="pdf" id="pdf" placeholder='Seu link' required value={pdfF} onChange={(evt)=>setPdf(evt.target.value)}/>
                    </div>
                    <Button className='submit btn_update'>Salvar alterações</Button>
                </form>
            </div>
        );
    };
//------------------------------------------------------
export default Update;