import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cardData } from "../../static-data";

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
    return (
        <div className="simple-card-wrapper h-[90vh]">
            <div className="simple-card h-full gap-[30px]">
                <div className="bg-gradient-to-r from-[#00FFFF] to-[#40FFC0] w-[120px] h-[120px] flex justify-center items-center mx-auto rounded-full p-[5px] overflow-hidden">
                    <div className=" bg-black rounded-full p-[5px]">
                        <img src={data.logo} alt="" />
                    </div>
                </div>
                <div className="title">{data.title}</div>
                <div className="subtitle">{data.subtitle}</div>
                <span className="bg-gradient-to-r from-[#00FFFF]   to-[#40FFC0] p-[2px] w-fit mx-auto rounded-md">
                    <button className=" w-fit  px-5 py-3 bg-black font-bold rounded-md  transition-all leading-[1.4rem]  ">
                        <p className="title !text-[1.2rem] !leading-[1.4rem] m-0">
                        Book a Meeting
                        </p>
                    </button>                
                </span>
                {/* <img
                    src="https://www.cobratate.com/jointherealworld/images/crypto.jpg"
                    alt=""
                /> */}
            </div>
        </div>
    );
};

const Cards = () => {
    // useGSAP(() => {
    //     let panels = gsap.utils.toArray(".row-wrapper");

    //     gsap.registerPlugin(ScrollTrigger);

    //     panels.forEach((panel) => {
    //         gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: panel,
    //                 start: () =>
    //                     panel.offsetHeight < window.innerHeight
    //                         ? "top top"
    //                         : "bottom bottom",

    //                 scrub: 2,
    //                 pin: true,
    //                 pinSpacing: false,
    //             },
    //         });

    //         const t1 = gsap.fromTo(
    //             panel.children[0],
    //             {
    //                 x: -350,
    //                 opacity: 0,
    //                 scale:0.5,
    //             },
    //             {
    //                 x: 0,
    //                 opacity: 1,
    //                 scale:1
    //             }
    //         );
    //         const t2 = gsap.fromTo(
    //             panel.children[1],
    //             {
    //                 x: 350,
    //                 opacity: 0,
    //                 scale:0.5
    //             },
    //             {
    //                 x: 0,
    //                 opacity: 1,
    //                 scale:1
    //             }
    //         );

    //         ScrollTrigger.create({
    //             trigger: panel,
    //             start: "top 0%",
    //             end: "bottom 0%",

    //             toggleActions: "restart pause reverse none",

    //             animation: t1,
    //         });
    //         ScrollTrigger.create({
    //             trigger: panel,
    //             start: "top 0%",
    //             end: "bottom 0%",

    //             toggleActions: "restart pause reverse none",

    //             animation: t2,
    //         });
    //     });
    // }, []);

    useGSAP(() => {
        let panels = gsap.utils.toArray(".row-wrapper");
    
        gsap.registerPlugin(ScrollTrigger);
    
        panels.forEach((panel) => {
            const leftCard = panel.children[0];
            const rightCard = panel.children[1];
    
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: panel,
                    start: "top 80%",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse",
                    scrub: 0.2,
                }
            });
    
            tl.fromTo(leftCard, 
                { x: "-50%", opacity: 0, scale: 0, force3D: true },
                { x: "0%", opacity: 1, scale: 1, duration: 1, ease: "power2.out", force3D: true }
            )
            .fromTo(rightCard,
                { x: "50%", opacity: 0, scale: 0, force3D: true },
                { x: "0%", opacity: 1, scale: 1, duration: 1, ease: "power2.out", force3D: true },
                "<" // Start at the same time as the previous animation
            );
    
            // Optional: Add a "combining" animation at the end
            tl.to([leftCard, rightCard], {
                x: 0,
                duration: 0.5,
                ease: "power2.inOut"
            });
        });
    }, []);

    
    return (
        <section className="section overflow-x-hidden">
            <div className="container p-0 cards">
                <div className="text-section">
                    <h1 className="main-heading">
                        Tailored Digital Strategies
                    </h1>
                    <p className="text-content text-white">
                        Transforming Your Digital Presence with Expert Solutions
                    </p>
                    {/* <h1 className="main-heading">UNIQUE SOLUTIONS</h1>
                    <p className="text-content">Developing a Strong Client Base</p> */}
                </div>
                {cardData.map((pair, i) => (
                    <div key={i} className={`row-wrapper`}>
                        {pair.map((item, index) => (
                            <div
                                key={index}
                                className={`card-wrapper card-wrapper-${
                                    (index + i) % 2 ? 0 : 1
                                }`}
                            >
                                <Card data={item} />
                            </div>
                        ))}
                    </div>
                ))}
                {/* <div className="spacer"></div>
                <div className="spacer"></div> */}
            </div>
        </section>
    );
};

export default Cards;
