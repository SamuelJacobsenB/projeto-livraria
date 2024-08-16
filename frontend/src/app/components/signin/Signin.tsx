"use client";
//------------------------------------------------------
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
//------------------------------------------------------
import { GoogleLogin } from '@react-oauth/google';
//------------------------------------------------------
import Button from '../button/Button';
//------------------------------------------------------
import api from '@/services/api';
//------------------------------------------------------
import './Signin.css';
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
        const res = await api.post('/create/verify', user);

        if(res.data.token){
            setCookie('token', res.data.token);

            setEmail('');
            setPassword('');

            window.location.reload();
        } else {
            router.push('/signup', res.data);
            console.log(res.data);
        };
    } catch(err){
        console.log('Erro catch', err);
    };
  };

  const handleSuccessGoogle = async(res: object) => {
    interface credentialToken { credential: string };
    const { credential } = res as credentialToken;

    const verify = await api.post('/create/google/verify', { googleInformations: credential});

    if(verify.data.token){
        setCookie('token', verify.data.token);
        window.location.reload();
    } else {
        router.push('/signup', verify.data);
        console.log(verify.data);
    };
  };

  return (
        <div className='signin'>
            <h1>Entre aqui:</h1>
            <div className="google_space_signin">
                    <GoogleLogin
                        text='continue_with'
                        onSuccess={(res)=>{handleSuccessGoogle(res)}}
                        onError={()=>console.log('Google authenticate error')}
                        width={350}
                        shape='circle'
                        context='signup'
                    />
                </div>
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
  );
};
//------------------------------------------------------
export default SiginUp;