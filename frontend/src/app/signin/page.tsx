
import Button from '../components/button/Button';
//------------------------------------------------------
import './page.css'
//------------------------------------------------------
const SiginUp = () => {
  return (
    <div className='signin'>
        <h1>Entre aqui:</h1>
        <form method="post">
            <div className="form_control">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" placeholder='meuemail@email.com' required/>
            </div>
            <div className="form_control">
                <label htmlFor="password">Senha: </label>
                <input type="password" name="password" id="password" placeholder='exemplo_4321' minLength={8} required/>
            </div>
            <Button className='submit btn_log'>Entrar</Button>
        </form>
    </div>
  );
};
//------------------------------------------------------
export default SiginUp;