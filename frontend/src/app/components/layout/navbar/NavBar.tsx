
//------------------------------------------------------
import Image from 'next/image';
import Link from 'next/link';
//------------------------------------------------------
import './NavBar.css';
//------------------------------------------------------
const NavBar = () => {



  return (
    <nav className='navbar'>
        <div>
          
        </div>
        <div>
            <div>
                <Link href={'/home'}>Home</Link>
                <Link href={'/signin'}>SignIn</Link>
                <Link href={'/signup'}>SignUp</Link>
            </div>
        </div>
    </nav>
  );
};
//------------------------------------------------------
export default NavBar;