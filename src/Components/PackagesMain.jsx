import { useEffect, useRef } from "react";
import { checkIcon, Star } from "../../static-img-urls"
import { packagesData } from "../../static-data";


/* eslint-disable react/prop-types */
const PackageCard = ({ item, index }) => {
    const { name, features, serviceHighlights, description, plan, cta } = item

    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(index % 2 === 0 ? 'animate-right' : 'animate-left');
                }
                // else {
                //     entry.target.classList.remove('animate-right', 'animate-left');
                // }
            });
        });

        const cardElement = cardRef.current;
        if (cardElement) {
            observer.observe(cardElement);
        }

        return () => {
            if (cardElement) {
                observer.unobserve(cardElement);
            }
        };
    }, [index]);

    return (
        <div ref={cardRef} className={`bg-[#2B2B2B] relative w-full rounded-md flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center justify-evenly gap-10 p-7 min-h-[60vh] `}>
            <div className="min-h-full relative max-w-[40%] self-stretch  rounded-md bg-[radial-gradient(circle_at_30%_107%,_#fdf497_0%,_#fdf497_5%,_#fd5949_45%,_#d6249f_60%,_#285AEB_90%)] shadow-[0px_3px_10px_rgba(0,0,0,0.25)] p-[30px] flex flex-col justify-evenly gap-[30px]">
                <div className="flex flex-col gap-[10px]">
                    <h3 className="text-[18px] font-semibold ribbon text-white m-0">{plan}</h3>
                    <p className="mt-[55px] text-base text-white">{description}</p>
                </div>
                <div className="flex flex-col gap-[15px]">
                    <h3 className="text-[36px] leading-[48px] m-0 font-bold text-white uppercase">Service Highlights</h3>
                    <div className="flex flex-col gap-2">
                        {
                            serviceHighlights.map(item => <div className="flex gap-3 items-center max-w-[470px]" key={item}>
                                <span className="bg-gradient-to-tr from-[#00FFFF] to-[#40FFC0] flex justify-center items-center rounded-full min-w-[30px] min-h-[30px]">
                                    <img className="w-[16px] h-[16px] invert" src={checkIcon} alt="" />
                                </span>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-white text-[24px] leading-[28px] capitalize m-0">{item}</h3>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
                <button className=" w-fit  px-5 py-3 bg-black font-bold rounded-md  transition-all leading-[1.4rem]  ">
                    <p className="title !text-[1.2rem] !leading-[1.4rem] m-0">
                       {cta}
                    </p>
                </button>
            </div>
            <div className="flex flex-col gap-8 max-w-[40%]">
                <div className="flex flex-col gap-2">
                    <h3 className="text-[48px] main-heading m-0 !text-left">{name}</h3>
                </div>
                <div className="flex flex-col gap-4">
                    {
                        features.map(item => <div className="flex gap-3 items-center max-w-[470px]" key={item}>
                            <span className="bg-gradient-to-tr from-[#00FFFF] to-[#40FFC0] flex justify-center items-center rounded-full min-w-[30px] min-h-[30px]">
                                <img className="w-[16px] h-[16px] invert" src={Star} alt="" />
                            </span>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-white text-[24px] leading-[28px] capitalize m-0">{item}</h3>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};


const PackagesMain = () => {
    return (
        <div className="services-content container-fluid">
            <div className="container flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="main-heading m-0">
                            Unlock Exclusive Social Media Growth Packages
                        </h1>
                        <p className=" text-white text-[36px] leading-[1.2]">
                            Choose the Perfect Plan to Skyrocket Your Online Presence
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-14 project-cards">
                    {
                        packagesData.map((item, index) => {
                            return <PackageCard key={item.title} item={item} index={index} />
                        })

                    }
                </div>

            </div>
        </div>
    )
}

export default PackagesMain