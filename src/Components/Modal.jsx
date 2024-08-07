import { useEffect, useRef } from 'react';
import { timesIcon } from '../../static-img-urls';
import { createPortal } from 'react-dom';


const Modal = (props) => {
  const { children, toggle, size, open, hideTimes } = props;


  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggle(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        toggle(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [open, toggle]);



  return (
    createPortal(
      <div className='fixed z-10 inset-0 w-full h-full flex items-center justify-center'>
        <div ref={modalRef} className={`absolute mx-0 my-0  md:rounded-[8px] min-h-[50px] max-h-[calc(100vh-40px)] overflow-y-scroll hide-scrollbar z-50 ${size ? size : 'md:min-w-[400px]'}`}>
          <div className="border-b-[0px] border-border-primary px-[18px] text-[20px] font-semibold sticky top-0  z-[1]">
            {!hideTimes ?
              <button className="hidden md:block absolute right-3 top-[16px] w-[14px] h-[14px] cursor-pointer" onClick={() => toggle(false)} type="button">
                <img alt="Times" className='invert' sizes="10px" src={timesIcon} />
              </button>
              : undefined}
          </div>
          <div>{open ? children : undefined}</div>
        </div>
        <div className='bg-black/70 z-10 transition-all w-full h-full' />
      </div>,
      document.getElementById("modal")
    )
  );
};

export default Modal;
