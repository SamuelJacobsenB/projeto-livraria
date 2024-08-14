"use client";
//------------------------------------------------------
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
//------------------------------------------------------
import Link from 'next/link';
//------------------------------------------------------
import Button from '@/app/components/button/Button';
//------------------------------------------------------
import adminVerify from '@/services/adminVerify';
import api from '@/services/api';
//------------------------------------------------------
import './page.css';
//------------------------------------------------------
const AdminCreate = () => {
    const router = useRouter();
    
    const [ cookie ] = useCookies<string>();

    const [ picture, setPicture ] = useState<string>('');
    const [ name, setName ] = useState<string>('');
    const [ author, setAuthor ] = useState<string>('');
    const [ year, setYear ] = useState<number>(0);
    const [ pages, setPages ] = useState<number>(0);
    const [ description, setDescription ] = useState<string>('');
    const [ pdf, setPdf ] = useState<string>('');

    const handleSubmit = async(evt: any) => {
        evt.preventDefault();

        try {   
            const book: object = { picture, name, author, year, pages, description, pdf };
            const res = await api.post('/create/book', book);

            if(res.data.success_msg){
                console.log(res.data.success_msg);
                router.push('/admin', res.data.success_msg);
            } else {
                console.log(res.data.error_msg);
                router.push('/admin/create', res.data.error_msg);
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
        adminVerifyToken();
    }, [adminVerifyToken]);

    return (
        <div className='create'>
            <Link href={'/admin'} className='admin_create_modify_link'>Voltar à página principal</Link>

            <h1>Cadastrar livro:</h1>
            <form method="post" onSubmit={(evt)=>handleSubmit(evt)}>
                <div className="form_control">
                    <label htmlFor="picture">Imagem: </label>
                    <input type="text" name="picture" id="picture" placeholder='Capa do livro' autoFocus required value={picture} onChange={(evt)=>setPicture(evt.target.value)}/>
                </div>
                <div className="form_control">
                    <label htmlFor="name">Nome do livro: </label>
                    <input type="text" name="name" id="name" placeholder='Nome do livro' required value={name} onChange={(evt)=>setName(evt.target.value)}/>
                </div>
                <div className="form_control">
                    <label htmlFor="author">Nome do autor: </label>
                    <input type="text" name="author" id="author" placeholder='Nome do autor' value={author} onChange={(evt)=>setAuthor(evt.target.value)}/>
                </div>
                <div className="form_control">
                    <label htmlFor="year">Ano de criação: </label>
                    <input type="number" name="year" id="year" placeholder='Ano de criação' value={year} onChange={(evt)=>setYear(Number(evt.target.value))}/>
                </div>
                <div className="form_control">
                    <label htmlFor="pages">Número de páginas: </label>
                    <input type="number" name="pages" id="pages" placeholder='Número de páginas' value={pages} onChange={(evt)=>setPages(Number(evt.target.value))}/>
                </div>
                <div className="form_control">
                    <label htmlFor="description">Descrição: </label>
                    <textarea name="description" id="description" placeholder='Sua descrição' value={description} onChange={(evt)=>setDescription(evt.target.value)}></textarea>
                </div>
                <div className="form_control">
                    <label htmlFor="pdf">Link do PDF: </label>
                    <input type="text" name="pdf" id="pdf" placeholder='Seu link' required value={pdf} onChange={(evt)=>setPdf(evt.target.value)}/>
                </div>
                <Button className='submit btn_cad'>Cadastrar livro</Button>
            </form>
        </div>
    );
};
//------------------------------------------------------
export default AdminCreate;