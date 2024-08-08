
import Button from '../components/button/Button';
//------------------------------------------------------
import './page.css'
//------------------------------------------------------
const SiginUp = () => {
  return (
    <div className='signup'>
        <h1>Cadastre-se aqui:</h1>
        <form method="post">
            <div className="form_control">
                <label htmlFor="name">Nome completo: </label>
                <input type="text" name="name" id="name" placeholder='Seu nome' autoFocus required/>
            </div>
            <div className="form_control">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" placeholder='meuemail@email.com' required/>
            </div>
            <div className="form_control">
                <label htmlFor="password">Senha: </label>
                <input type="password" name="password" id="password" placeholder='exemplo_4321' minLength={8} required/>
            </div>
            <div className="form_control">
                <label htmlFor="password_check">Confirme a senha: </label>
                <input type="password" name="password_check" id="password_check" placeholder='exemplo_4321' minLength={8} required/>
            </div>
            <Button className='submit btn_cad'>Cadastre-se</Button>
        </form>
    </div>
  );
};
//------------------------------------------------------
export default SiginUp;