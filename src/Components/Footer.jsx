import { facebook, instagram, linkedin } from '../../static-img-urls';
import logo from '../assets/svgs/white_logo.png'

const Footer = () => {
    return (
        <div className="container-fluid footer herobg !h-[50vh] relative">
            <div className="container flex flex-col gap-[20px] ">
                <div className='flex justify-between items-center w-full'>
                    <div className="w-[60%]">
                        <p className="main-heading !text-left">You often Search and Find No way</p>
                        <p className="text-[32px] text-white uppercase !text-left">This is your chance explore only one way</p>

                    </div>
                    <div className="w-[40%]">
                        <img className='logo float-right' src={logo} alt="logo" />
                    </div>
                </div>
                <div className='flex !justify-between absolute bottom-4 container !h-fit items-center w-full'>
                    <div className='flex gap-[10px] items-center '>
                        <p className="main-heading !text-[18px] m-0 font-bold uppercase !text-left">info@theo1w.com</p>
                        <p className="main-heading !text-[18px] m-0 font-bold uppercase !text-left">+971585151424</p>
                    </div>
                    <div className='flex gap-[20px]'>
                        <img className='w-[30px] h-[30px]' src={facebook} alt="logo" />
                        <img className='w-[30px] h-[30px]' src={instagram} alt="logo" />
                        <img className='w-[30px] h-[30px]' src={linkedin} alt="logo" />       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
