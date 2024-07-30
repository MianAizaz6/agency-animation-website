/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { numberData } from "../../static-data"
import { aboutcover } from "../../static-img-urls"

const NumberCard = ({item}) => {
    const [numValue,setnumValue] = useState(0);

    useEffect( () => {
        if(numValue !== item.number){
            setTimeout(() => {
                let newNum = numValue + 1;
                setnumValue(newNum)
            },50)
        }
    },[numValue,item.number])

    return(
        <div className="flex flex-col border-r last:border-none border-white h-full">
            <h3 className="font-extrabold text-[72px] title mb-3">{numValue} <span>{item.symbol}</span></h3>
            <h4 className="border-t border-white w-[60%] pt-3 text-[24px] leading-[32px] text-white ">
                {item.heading}
            </h4>
        </div>
    )
}

const AboutMain = () => {
    return (
        <div className="about-main container-fluid">
            <div className="container flex flex-col py-28 gap-28">
            <div className="grid grid-cols-2 gap-4 ">
                    <div className="flex flex-col gap-8 max-w-[530px]">
                        <div className="flex flex-col gap-2">
                            <p className="text-[16px] text-white m-0">About The Agency</p>
                            <h3 className="text-[48px] main-heading m-0 !text-left">Get to know about O1W</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                        <p className="text-[#c8c8c8] text-[18px] m-0">At O1W, we are passionate about transforming brands and driving growth in the digital landscape. With a team of seasoned experts, cutting-edge tools, and innovative strategies, we deliver customized digital marketing solutions that propel businesses to new heights. Our commitment to excellence and results-driven approach ensures that our clients stay ahead of the curve, outperforming their competition. From SEO and social media marketing to content creation and data-driven analytics, we offer a comprehensive suite of services tailored to meet your unique needs. Join us on this journey and unlock your brands full potential with unparalleled expertise and dedication.</p>
                        </div>
                    </div>
                    <div>
                        <img className="w-full h-[410px] object-cover svg-img" src={aboutcover} alt=""  />
                    </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {
                    numberData.map( item => <NumberCard key={item.symbol} item={item}/>)
                }
            </div>
            </div>
        </div>
    )
}

export default AboutMain