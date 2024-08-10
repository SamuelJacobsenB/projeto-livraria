"use client";
//------------------------------------------------------
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
//------------------------------------------------------
import Link from 'next/link';
//------------------------------------------------------
import Button from '../components/button/Button';
//------------------------------------------------------
import adminVerify from '@/services/adminVerify';
//------------------------------------------------------
import './page.css';
//------------------------------------------------------
const Admin = () => {
  const router = useRouter();
  const [ cookie, setCookie, removeCookie ] = useCookies<string>();

  useEffect(()=>{
    adminVerify(cookie.token, router)
      .then((res)=>{})
      .catch((err)=>{
        console.log('Não autenticado');
        router.push('/home');
      });
  }, [cookie, router]);

  return (
    <div className="admin">
        <h1>Administrador:</h1>
        <Link href={'/admin/create'} className='admin_link'>
            <Button className='submit'>Cadastrar livro</Button>
        </Link>
        <Link href={'/admin/modify'} className='admin_link'>
            <Button className='submit'>Modificar livros</Button>
        </Link>
    </div>
  );
};
//------------------------------------------------------
export default Admin;