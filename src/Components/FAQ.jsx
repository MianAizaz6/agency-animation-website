import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";
import { faqs } from "../../static-data";
import PlusIcon from "../assets/svgs/plusIcon";

const FAQ = () => {
    const accordiansContainer = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(
        () => {
            gsap.from(".items", {
                scrollTrigger: {
                    trigger: ".items",
                    start: "center center",
                    end: "bottom top",

                    toggleActions: "restart pause resume none",
                },
                y: 50,

                opacity: 0,

                duration: 0.1,
                ease: "sine.in",
                stagger: {
                    each: 0.6,
                },
            });
        },
        { scope: accordiansContainer }
    );

    return (
        <div style={{ backgroundColor: "#181b21" }}>
            <div className="faq container-fluid ">
                <div className="container">
                    <div className="display-1 text-center text-[#ffff] my-5">
                        Frequently Asked Questions
                    </div>

                    <div className="faq-section" ref={accordiansContainer}>
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
                                    <AccordionItemHeading className="py-[25px] border-[1px] custom-gradient-bg border-white  px-3">
                                        <AccordionItemButton className="flex justify-between">
                                            <h4 className="text-[#ffff] text-[16px] font-bold leading-[28px]">
                                                {item.heading}
                                            </h4>
                                            <PlusIcon />
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="pt-[25px] text-[16px] border-[1px] p-4 border-[#ffff] leading-[24px] text-[#ffff]">
                                        {item.content}
                                    </AccordionItemPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        {/* <Accordion defaultActiveKey="0">
                            {[...Array(15)].map((item, index) => (
                                <Accordion.Item
                                    className="items"
                                    key={item}
                                    eventKey={index}
                                >
                                    <Accordion.Header>
                                        Accordion Item #{index}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat. Duis aute irure
                                        dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
