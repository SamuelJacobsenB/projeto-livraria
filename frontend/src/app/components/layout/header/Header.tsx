import LoadImage from '../../loadImage/LoadImage';
//------------------------------------------------------
import './Header.css';
//------------------------------------------------------
const Header = () => {
  return (
    <div className="header layout_right">
        <LoadImage src='/book.png' alt='logo' width={300} height={60}/>
    </div>
  );
};
//------------------------------------------------------
export default Header;