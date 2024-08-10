import Link from 'next/link';
//------------------------------------------------------
import Button from '../components/button/Button';
//------------------------------------------------------
import './page.css';
//------------------------------------------------------
const Admin = () => {
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