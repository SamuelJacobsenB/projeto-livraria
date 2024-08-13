import { useRef } from 'react';
//------------------------------------------------------
import { IoClose } from 'react-icons/io5';
//------------------------------------------------------
import cardProps from '@/types/cardProps';
//------------------------------------------------------
import './FlashCard.css';
//------------------------------------------------------
const FlashCard = (props: cardProps) => {

    const flashArea: any = useRef();

    const handleClose = (): void => {
        flashArea.current.style.display = 'none';
    };

  return (
        <div className={`flash_area ${props.className}`} ref={flashArea}>
            <div className="flash_card">
                <IoClose className='close_icon' onClick={handleClose}/>
                { props.children }
            </div>
        </div>
  );
};
//------------------------------------------------------
export default FlashCard;