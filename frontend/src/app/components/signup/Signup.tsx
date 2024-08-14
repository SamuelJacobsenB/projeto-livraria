"use client";
//------------------------------------------------------
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
//------------------------------------------------------
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
//------------------------------------------------------
import Button from '../button/Button';
//------------------------------------------------------
import api from '@/services/api';
//------------------------------------------------------
import './Signup.css';
//------------------------------------------------------
const SiginUp = () => {
    const router = useRouter();

    const [ cookie, setCookie ] = useCookies<string>();

    const [ name, setName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ password_check, setPassword_check ] = useState<string>('');

    const handleSubmit = async(evt: any) => {
        evt.preventDefault();

        try {
            const user: object = { name, email, password, password_check };
            const res = await api.post('/create/user', user);

            if(res.data.token){
                setCookie('token', res.data.token);
                
                setName('');
                setEmail('');
                setPassword('');
                setPassword_check('');

                window.location.reload();
            } else {
                router.push('/signup', res.data);
                console.log(res.data);
            };
        } catch(err){
            console.log('Erro catch', err);
        };
    };

    return (
            <div className='signup'>
                <h1>Cadastre-se aqui:</h1>
                    <GoogleLogin
                        text='continue_with'
                        onSuccess={(res)=>{console.log(res)}}
                        onError={()=>console.log('Erro')}
                    />
                <form method="post" onSubmit={(evt)=>handleSubmit(evt)}>
                    {/* <div className="form_control">
                        <label htmlFor="name">Nome completo: </label>
                        <input type="text" name="name" id="name" value={name} placeholder='Seu nome' autoFocus required onChange={(evt)=>setName(evt.target.value)}/>
                    </div>
                    <div className="form_control">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" placeholder='meuemail@email.com' required value={email} onChange={(evt)=>setEmail(evt.target.value)}/>
                    </div> */}
                    <div className="form_control">
                        <label htmlFor="password">Senha: </label>
                        <input type="password" name="password" id="password" placeholder='exemplo_4321' minLength={8} required value={password} onChange={(evt)=>setPassword(evt.target.value)}/>
                    </div>
                    <div className="form_control">
                        <label htmlFor="password_check">Confirme a senha: </label>
                        <input type="password" name="password_check" id="password_check" placeholder='exemplo_4321' minLength={8} required value={password_check} onChange={(evt)=>setPassword_check(evt.target.value)}/>
                    </div>
                    <Button className='submit btn_cad'>Cadastre-se</Button>
                </form>
            </div>
    );
};
//------------------------------------------------------
export default SiginUp;