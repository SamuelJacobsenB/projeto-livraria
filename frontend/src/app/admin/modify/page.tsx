"use client";
//------------------------------------------------------
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
//------------------------------------------------------
import Link from 'next/link';
//------------------------------------------------------
import LoadImage from '@/app/components/loadImage/LoadImage';
import Button from '@/app/components/button/Button';
//------------------------------------------------------
import { HiPencilAlt } from "react-icons/hi";
import { FaRegTrashCan } from "react-icons/fa6";
//------------------------------------------------------
import adminVerify from '@/services/adminVerify';
import api from '@/services/api';
import getBooks from '@/services/getBooks';
//------------------------------------------------------
import bookType from '@/types/bookType';
//------------------------------------------------------
import './page.css';
//------------------------------------------------------
const Modify = () => {
  const router = useRouter();
  const [ cookie ] = useCookies<string>();
  const [ books, setBooks ] = useState<object[]>([]);

  const handleDelete = async(evt: any) => {
    evt.preventDefault();
    const id: number = Number(evt.target.firstChild.value);

    try {
        const res = await api.post(`/delete/book`, { id: id });

        if(res.data.success_msg){
            console.log(res.data.success_msg);
            router.refresh();
        } else {
            console.log(res.data.error_msg);
            router.push('/admin/modify', res.data.error_msg);
        };
    } catch(err){
        router.push('/admin/modify');
    };
  };

  const adminVerifyToken = useCallback(async()=>{
      const verify = await adminVerify(cookie.token);

      if(verify.error_msg){
          router.push('/home');
      };
  }, [cookie, router]);

  useEffect(() => {
    getBooks()
      .then((res)=>{
        setBooks(res);
      })
      .catch((err)=>{
        console.log(err);
      });

      adminVerifyToken();
  }, [adminVerifyToken]);

  return (
    <div className='modify'>
        <Link href={'/admin'} className='admin_create_modify_link'>Voltar à página principal</Link>

      <h1>Veja todos os livros listados abaixo:</h1>
      <div className="book_list">
        {
          books.map((book, i)=>{
            const { id, picture, name } = book as bookType;
            return (

                    <div className="item" id={i.toString()} key={id}>
                        <div className="item_img">
                            <LoadImage src={picture} alt={name} width={180} height={240} className='book_img'/>
                        </div>
                        <div className="info">
                            <h3 className='book_name'>{name}</h3>
                            <div className="btn_modify_area">
                                <Link href={`/admin/modify/${id}`}>
                                    <Button className='edit btn_modify'>
                                        <p>
                                            <HiPencilAlt className='small_icon'/>
                                            Editar
                                        </p>
                                    </Button>
                                </Link>
                                <form method="post" onSubmit={(evt)=>handleDelete(evt)}>
                                    <input type="hidden" name="id" value={id}/>
                                    <Button className='danger btn_modify'>
                                        <p>
                                            <FaRegTrashCan className='small_icon'/>
                                            Deletar
                                        </p>
                                    </Button>
                                </form>
                            </div>
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
export default Modify;