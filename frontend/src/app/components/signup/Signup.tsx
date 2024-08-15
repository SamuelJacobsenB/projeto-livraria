"use client";
//------------------------------------------------------
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
//------------------------------------------------------
import { GoogleLogin } from '@react-oauth/google';
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
    const form: any = useRef();
    const googleArea: any = useRef();

    const [ googleInformations, setGoogleInformations ] = useState<string>();
    const [ password, setPassword ] = useState<string>('');
    const [ password_check, setPassword_check ] = useState<string>('');

    const handleSuccessGoogle = (res: object) => {
        interface credentialToken { credential: string };
        const { credential } = res as credentialToken;

        setGoogleInformations(credential);

        googleArea.current.style.display = 'none';
        form.current.style.display = 'flex';
    };

    const handleSubmit = async(evt: any) => {
        evt.preventDefault();

        try {
            const user: object = { googleInformations, password, password_check };
            const res = await api.post('/create/user', user);

            if(res.data.token){
                setCookie('token', res.data.token);
                
                setGoogleInformations('');
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

    useEffect(()=>{
        form.current.style.display = 'none';
    }, []);

    return (
            <div className='signup'>
                <h1>Cadastre-se aqui:</h1>
                <div className="google_space" ref={googleArea}>
                    <GoogleLogin
                        text='continue_with'
                        onSuccess={(res)=>{handleSuccessGoogle(res)}}
                        onError={()=>console.log('Google authenticate error')}
                        width={500}
                        shape='circle'
                        context='signup'
                    />
                </div>
                <form method="post" onSubmit={(evt)=>handleSubmit(evt)} ref={form}>
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