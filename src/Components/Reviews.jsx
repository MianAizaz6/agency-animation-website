import { reviewsData } from "../../static-data"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Reviews = () => {
    const options = {
        type: 'loop',
        perPage: 1,
        perSlide: 1,
        arrows: false,
        pagination: false,
        autoplay: true
    }
    return (
        <div className="herobg">
            <div className="container flex gap-[5%] !justify-start">
                <div className="flex text-white flex-col w-[50%] ">
                    <Splide options={options}>
                        {
                            reviewsData.map((innerArr, index) => (
                                <SplideSlide key={index} className={"flex flex-col gap-[30px]"}>
                                    {
                                        innerArr.map((item, innerIndex) => (
                                            <div className="odd:self-start even:self-end p-[30px] w-[70%] h-[200px] bg-[rgba(255,255,255,0.20)] rounded-[16px] flex items-center gap-[15px]" key={innerIndex}>
                                                <div className="bg-[#25253E] min-w-[50px] min-h-[50px] text-[#38B6FF] flex justify-center items-center text-[28px] font-bold rounded-full">{item.name[0]}</div>
                                                <div className="flex flex-col gap-[10px]">
                                                    <h1 className="main-heading !text-left !text-[24px] !m-0" >{item.name}</h1>
                                                    <p className="text-[16px]">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </SplideSlide>
                            ))
                        }
                    </Splide>
                </div>
                <div className="flex flex-col w-[45%]">
                    <h1 className="main-heading !text-left">Developing a Strong </h1>
                    <h1 className="main-heading !text-left">Client Base </h1>
                    <p className="text-[36px] text-white leading-tight ">Delivering tailored solutions helps develop a resilient client base, ensuring satisfaction and lasting relationships.</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews