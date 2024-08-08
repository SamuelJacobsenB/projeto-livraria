
import buttonProps from '@/types/buttonProps';
//------------------------------------------------------
import './Button.css';
//------------------------------------------------------
const Button = (props: buttonProps) => {
  return (
    <button className={`default_button ${props.className}`} onClick={props.onClick}>
        { props.children }
    </button>
  );
};
//------------------------------------------------------
export default Button;