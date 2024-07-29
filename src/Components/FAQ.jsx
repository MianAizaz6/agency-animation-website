import  { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import PlusIcon from "../assets/svgs/plusIcon";
import { faqs } from '../../static-data';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
    const accordionsContainer = useRef();

    useEffect(() => {
        const items = accordionsContainer.current.querySelectorAll('.items');
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: accordionsContainer.current,
                start: "top 70%",
                once: true, // This ensures the animation only happens once
            }
        });

        tl.fromTo(items, 
            { y: 50, opacity: 0 },
            { 
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "sine.out",
                stagger: {
                    each: 0.2,
                },
            }
        );

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="faq-section">
            <div className="faq container-fluid">
                <div className="container">
                    <div className="flex flex-col items-center gap-[6px]">
                        <h2 className="main-heading">Frequently Asked Questions</h2>
                        <p className="text-white text-[24px]">
                            Find Answers to Common Inquiries
                        </p>
                    </div>

                    <div className="mt-[30px]" ref={accordionsContainer}>
                        <Accordion
                            className="mx-auto w-[90%]"
                            allowZeroExpanded
                            defaultActiveKey="0"
                        >
                            {faqs.map((item) => (
                                <AccordionItem
                                    className="mb-4 items"
                                    key={item.heading}
                                >
                                    <div className="!bg-[rgba(255,255,255,0.2)] rounded-[10px]">
                                        <AccordionItemHeading className="py-[25px] border-[1px] rounded-[10px] px-3">
                                            <AccordionItemButton className="flex justify-between">
                                                <h4 className="text-[#ffff] m-0 text-[16px] font-bold leading-[28px]">
                                                    {item.heading}
                                                </h4>
                                                <PlusIcon />
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </div>
                                    <AccordionItemPanel className="pt-[25px] text-[16px] m-[10px] p-4 border-[#ffff] leading-[24px] text-[#ffff]">
                                        {item.content}
                                    </AccordionItemPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;