"use client";
//------------------------------------------------------
import { useState } from 'react';
import { useRouter } from 'next/router';
//------------------------------------------------------
import Button from '../components/button/Button';
//------------------------------------------------------
import api from '@/services/api';
//------------------------------------------------------
import './page.css'
//------------------------------------------------------
const SiginUp = () => {
    const router = useRouter();

    const [ name, setName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ password_check, setPassword_check ] = useState<string>('');

    const handleSubmit = async() => {
        try {
            const user: object = { name, email, password, password_check };
            const res = await api.post('/user', user);

            if(res.data.token){

            } else {
                router.push('/signup', res.data);
                console.log(res.data);
            };
        } catch(err){
            
        };
    };

    return (
        <div className='signup'>
            <h1>Cadastre-se aqui:</h1>
            <form method="post">
                <div className="form_control">
                    <label htmlFor="name">Nome completo: </label>
                    <input type="text" name="name" id="name" placeholder='Seu nome' autoFocus required onChange={(evt)=>setName(evt.target.value)}/>
                </div>
                <div className="form_control">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" placeholder='meuemail@email.com' required onChange={(evt)=>setEmail(evt.target.value)}/>
                </div>
                <div className="form_control">
                    <label htmlFor="password">Senha: </label>
                    <input type="password" name="password" id="password" placeholder='exemplo_4321' minLength={8} required onChange={(evt)=>setPassword(evt.target.value)}/>
                </div>
                <div className="form_control">
                    <label htmlFor="password_check">Confirme a senha: </label>
                    <input type="password" name="password_check" id="password_check" placeholder='exemplo_4321' minLength={8} required onChange={(evt)=>setPassword_check(evt.target.value)}/>
                </div>
                <Button className='submit btn_cad'>Cadastre-se</Button>
            </form>
        </div>
    );
};
//------------------------------------------------------
export default SiginUp;