"use client";
//------------------------------------------------------
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
//------------------------------------------------------
import api from '@/services/api';
//------------------------------------------------------
import Button from '../components/button/Button';
//------------------------------------------------------
import './page.css';
//------------------------------------------------------
const SiginUp = () => {
  const router = useRouter();

  const [ cookie, setCookie ] = useCookies<string>();

  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  const handleSubmit = async(evt: any) => {
    evt.preventDefault();

    try {
        const user: object = { email, password };
        const res = await api.post('/create/user', user);

        if(res.data.token){
            setCookie('token', res.data.token);
            router.push('/home');
        } else {
            router.push('/signup', res.data);
            console.log(res.data);
        };
    } catch(err){
        console.log('Erro catch', err);
    };
};

  return (
    <div className='signin'>
        <h1>Entre aqui:</h1>
        <form method="post" onSubmit={(evt)=>handleSubmit(evt)}>
            <div className="form_control">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" placeholder='meuemail@email.com' required onChange={(evt)=>setEmail(evt.target.value)}/>
                </div>
            <div className="form_control">
                <label htmlFor="password">Senha: </label>
                <input type="password" name="password" id="password" placeholder='exemplo_4321' minLength={8} required onChange={(evt)=>setPassword(evt.target.value)}/>
            </div>
            <Button className='submit btn_log'>Entrar</Button>
        </form>
    </div>
  );
};
//------------------------------------------------------
export default SiginUp;