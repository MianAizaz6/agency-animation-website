// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";

import { useGSAP } from "@gsap/react";
import { cardData, whyusdata } from "../../static-data";
import { Star, whyUs } from "../../static-img-urls";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

/* eslint-disable react/prop-types */
const ServiceCard = ({ item }) => {
    const { title, subtitle, logo } = item
    return (
        // <div className="row services-row">
        //     <div className={`col-lg-6 order-${imageFirst ? 2 : 1}`}>
        //         <div className="services-card">
        //             <div className="title">{title}</div>
        //             <div className="text">{content}</div>
        //             <button>Get Service</button>
        //         </div>
        //     </div>
        //     <div
        //         className={`col-lg-6 d-flex justify-center order-${imageFirst ? 1 : 2
        //             }`}
        //     >
        //         <img src={image} alt="" />
        //     </div>
        // </div>
        <div className="bg-black card rounded-md flex flex-col gap-4 p-[20px] ">
            <img className="w-[48px] h-[48px]" src={logo} alt="" />
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



export const ServicesSection = () => {


    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        let cards = gsap.utils.toArray(".grid-container")
        // gsap.set('.grid-container');

        cards.forEach( (card) => {
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
                { y: "-50%", opacity: 0, scale: 1, force3D: true,  },
                { y: "00%", opacity: 1, scale: 1, duration: 2000, ease: "power4.in", force3D: true }
            )


        }) 
    }, {});

//     gsap.set("#img3", {transformPerspective: 700});

// const imganim3 = gsap.timeline();
// imganim3.to("#img3", {
//     autoAlpha: 1,
//     scale: 1,
//     duration: 2.5,
//     ease: "elastic.out(1,0.3)"
// })
// imganim3.to("#img3", {
//     rotateX: 12,
//     rotateY: 30,
//     opacity: .5,
//     duration: 1,
//     ease: "power4.out"
// });

// ScrollTrigger.create({
//     trigger: "#section-24-1330 ",
//     start: "top bottom",
//     end: "bottom top",
//     animation: imganim3,
//     toggleActions: "play pause resume reset"
// })
    // useGSAP(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     let rows = gsap.utils.toArray(".services-row");

    //     rows.forEach((row) => {
    //         gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: row,
    //                 start: "top 50%",
    //                 end: "bottom 40%",

    //                 toggleActions: "restart pause resume none",

    //                 markers: true,
    //             },
    //         })
    //             .from(row.children[0], {
    //                 x: -100,
    //             })
    //             .from(row.children[1], {});

    //         const t1 = gsap.from(row.children[0], {
    //             x: -50,
    //             opacity: 0,
    //         });
    //         const t2 = gsap.from(row.children[1], {
    //             scale: 0.5,
    //         });

    //         ScrollTrigger.create({
    //             trigger: row,
    //             start: "top 70%",
    //             end: "bottom top",

    //             toggleActions: "restart restart restart none",

    //             animation: t1,
    //         });
    //         ScrollTrigger.create({
    //             trigger: row,
    //             start: "top 70%",
    //             end: "bottom top",

    //             toggleActions: "restart restart restart none",

    //             animation: t2,
    //         });
    //     });
    // }, {});

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
                            cardData.map((arr) => {
                                // console.log(item)

                                const items = arr.map(item => {
                                    return <ServiceCard key={item.title} item={item} />

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
                        <img className="w-full h-[450px] object-cover svg-img" src={whyUs} alt=""  />
                    </div>
                </div>

            </div>
        </div>
    );
};
