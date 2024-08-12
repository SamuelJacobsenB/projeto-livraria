"use client";
//------------------------------------------------------
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
//------------------------------------------------------
import api from '@/services/api';
//------------------------------------------------------
import FlashCard from '../FlashCard';
import Button from '../../button/Button';
//------------------------------------------------------
import classNameProps from '@/types/classNameProps';
//------------------------------------------------------
import './FlashSignin.css';
//------------------------------------------------------
const SiginUp = (props: classNameProps) => {
  const router = useRouter();

  const [ cookie, setCookie ] = useCookies<string>();

  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  const handleSubmit = async(evt: any) => {
    evt.preventDefault();

    try {
        const user: object = { email, password };
        const res = await api.post('/create/verify', user);

        if(res.data.token){
            setCookie('token', res.data.token);
            router.push('/home', );
        } else {
            router.push('/signup', res.data);
            console.log(res.data);
        };
    } catch(err){
        console.log('Erro catch', err);
    };
};

  return (
    <FlashCard className={props.className}>
        <div className='signin'>
            <h1>Entre aqui:</h1>
            <form method="post" onSubmit={(evt)=>handleSubmit(evt)}>
                <div className="form_control">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" placeholder='meuemail@email.com' required value={email} onChange={(evt)=>setEmail(evt.target.value)}/>
                    </div>
                <div className="form_control">
                    <label htmlFor="password">Senha: </label>
                    <input type="password" name="password" id="password" placeholder='exemplo_4321' minLength={8} required value={password} onChange={(evt)=>setPassword(evt.target.value)}/>
                </div>
                <Button className='submit btn_log'>Entrar</Button>
            </form>
        </div>
    </FlashCard>
  );
};
//------------------------------------------------------
export default SiginUp;