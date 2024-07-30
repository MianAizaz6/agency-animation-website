// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";

import { useEffect, useRef } from "react";
import { projectsData } from "../../static-data";


/* eslint-disable react/prop-types */
const ProjectCard = ({ item, index }) => {
    const { Name, title, subtitle, logo } = item

    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(`Card ${index} is ${entry.isIntersecting ? 'in view' : 'out of view'}`);
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
        <div ref={cardRef} className={`bg-[#2B2B2B] project-card relative w-full rounded-md flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center justify-between gap-10 p-7 min-h-[80vh] `}>
            <div className="min-h-full min-w-[50%] self-stretch">
                <img className="rounded-[8px] min-h-full object-cover" src={logo} alt="" />
            </div>
            <div className="flex flex-col justify-evenly gap-6">
                <p className="m-0 text-[16px] leading-[20px] font-bold text-white tracking-wider border-b-2 w-fit pb-1">{Name}</p>
                <h3 className="title m-0 !text-[32px] !font-bold ">{title}</h3>
                <p className="text-[#999999] text-[20px] leading-[32px] m-0">{subtitle}</p>
                <button className=" w-fit  px-5 py-3 bg-black font-bold rounded-md  transition-all leading-[1.4rem]  ">
                    <p className="title !text-[1.2rem] !leading-[1.4rem] m-0 uppercase">
                        {`Check out ${Name} `}
                    </p>
                </button>
            </div>
        </div>
    );
};


// const WhyUsCard = ({ item }) => {
//     return (
//         <div className="flex gap-4 items-center max-w-[470px]">
//             <span className="bg-gradient-to-tr from-[#00FFFF] to-[#40FFC0] flex justify-center items-center rounded-full min-w-[56px] min-h-[56px]">
//                 <img className="w-[30px] h-[30px] invert" src={Star} alt="" />
//             </span>
//             <div className="flex flex-col gap-1">
//                 <h3 className="text-white text-[24px] leading-[28px] capitalize m-0">{item.heading}</h3>
//                 <p className="m-0 text-[#c8c8c8]">{item.subheading}</p>
//             </div>
//         </div>
//     )
// }



export const ProjectsSection = () => {

    //     useGSAP(() => {
    //     let panels = gsap.utils.toArray(".project-card");

    //     gsap.registerPlugin(ScrollTrigger);

    //     panels.forEach((panel) => {
    //         const leftCard = panel.children[0];
    //         const rightCard = panel.children[1];

    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: panel,
    //                 start: "top 80%",
    //                 end: "bottom bottom",
    //                 toggleActions: "play none none reverse",
    //                 scrub: 0.2,
    //             }
    //         });

    //         tl.fromTo(leftCard, 
    //             { x: "-50%", opacity: 0, scale: 1, force3D: true },
    //             { x: "0%", opacity: 1, scale: 1, duration: 1, ease: "power2.out", force3D: true }
    //         )
    //         .fromTo(rightCard,
    //             { x: "50%", opacity: 0, scale: 1, force3D: true },
    //             { x: "0%", opacity: 1, scale: 1, duration: 1, ease: "power2.out", force3D: true },
    //             "<" // Start at the same time as the previous animation
    //         );

    //         // Optional: Add a "combining" animation at the end
    //         tl.to([leftCard, rightCard], {
    //             x: 0,
    //             duration: 0.5,
    //             ease: "power2.inOut"
    //         });
    //     });
    // }, []);


    return (
        <div className="services-content container-fluid overflow-hidden">
            <div className="container flex flex-col gap-28">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="main-heading m-0">
                            Our Portfolio of Excellence
                        </h1>
                        <p className=" text-white text-[36px] leading-[1.2]">
                            Discover How We’ve Driven Unmatched Growth and Impact
                        </p>
                    </div>
                    {/* <div className="grid grid-cols-3 gap-4 grid-container">
                        {
                            projectsData.map((arr) => {
                                const items = arr.map(item => {
                                    return <ProjectCard key={item.title} item={item} />

                                })

                                return items
                            })
                        }
                    </div> */}
                    <div className="flex flex-col gap-14 project-cards">
                        {
                            projectsData.map((item, index) => {
                                return <ProjectCard key={item.title} item={item} index={index} />
                            })

                        }
                    </div>
                </div>

                {/* <div className="grid grid-cols-2 gap-4 whyus">
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
                </div> */}

            </div>
        </div>
    );
};
