// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";

import { useGSAP } from "@gsap/react";
import { projectsData, whyusdata } from "../../static-data";
import { Star, whyUs } from "../../static-img-urls";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

/* eslint-disable react/prop-types */
const ProjectCard = ({ item }) => {
    const { title, subtitle, logo } = item
    return (

        <div className="bg-black card rounded-md flex flex-col justify-between gap-4 p-[20px] ">
            <div className="h-[200px]">
                <img className="rounded-[8px]" src={logo} alt="" />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="title">{title}</h3>
                <p className="text-[#c8c8c8] text-[18px]">{subtitle}</p>
            </div>
        </div>
    );
};


const WhyUsCard = ({ item }) => {
    return (
        <div className="flex gap-4 items-center max-w-[470px]">
            <span className="bg-gradient-to-tr from-[#00FFFF] to-[#40FFC0] flex justify-center items-center rounded-full min-w-[56px] min-h-[56px]">
                <img className="w-[30px] h-[30px] invert" src={Star} alt="" />
            </span>
            <div className="flex flex-col gap-1">
                <h3 className="text-white text-[24px] leading-[28px] capitalize m-0">{item.heading}</h3>
                <p className="m-0 text-[#c8c8c8]">{item.subheading}</p>
            </div>
        </div>
    )
}



export const ProjectsSection = () => {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        let cards = gsap.utils.toArray(".grid-container")
        // gsap.set('.grid-container');

        cards.forEach((card) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cards,
                    start: "top 100px",
                    end: "top 0",
                    toggleActions: "play none none reverse",
                    scrub: 0.4,
                }
            });

            tl.fromTo(card,
                { y: "-50%", opacity: 0, scale: 1, force3D: true, },
                { y: "00%", opacity: 1, scale: 1, duration: 2000, ease: "power4.in", force3D: true }
            )


        })
    }, {});


    return (
        <div className="services-content container-fluid">
            <div className="container flex flex-col gap-28">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="main-heading m-0">
                            Your Success, Accelerated: Start Now
                        </h1>
                        <p className=" text-white text-[36px] leading-[1.2]">
                            Don’t Get Left Behind: Embrace Cutting-Edge Marketing Solutions
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 grid-container">
                        {
                            projectsData.map((arr) => {
                                const items = arr.map(item => {
                                    return <ProjectCard key={item.title} item={item} />

                                })

                                return items
                            })
                        }
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 whyus">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <p className="text-[16px] text-white m-0">Why Choose Us</p>
                            <h3 className="text-[48px] main-heading m-0 !text-left">Secure These Unmatched Advantages</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            {
                                whyusdata.map(item => <WhyUsCard key={item.heading} item={item} />)
                            }
                        </div>
                    </div>
                    <div>
                        <img className="w-full h-[450px] object-cover svg-img" src={whyUs} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};
