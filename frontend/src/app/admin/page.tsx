"use client";
//------------------------------------------------------
import { useEffect, useCallback } from 'react';
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
  const [ cookie ] = useCookies<string>();

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