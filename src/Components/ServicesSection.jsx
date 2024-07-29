import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

/* eslint-disable react/prop-types */
const ServicesRow = ({ title, content, image, imageFirst }) => {
    return (
        <div className="row services-row">
            <div className={`col-lg-6 order-${imageFirst ? 2 : 1}`}>
                <div className="services-card">
                    <div className="title">{title}</div>
                    <div className="text">{content}</div>
                    <button>Get Service</button>
                </div>
            </div>
            <div
                className={`col-lg-6 d-flex justify-center order-${
                    imageFirst ? 1 : 2
                }`}
            >
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export const ServicesSection = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        let rows = gsap.utils.toArray(".services-row");

        rows.forEach((row) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: "top 50%",
                    end: "bottom 40%",

                    toggleActions: "restart pause resume none",

                    markers: true,
                },
            })
                .from(row.children[0], {
                    x: -100,
                })
                .from(row.children[1], {});

            const t1 = gsap.from(row.children[0], {
                x: -50,
                opacity: 0,
            });
            const t2 = gsap.from(row.children[1], {
                scale: 0.5,
            });

            ScrollTrigger.create({
                trigger: row,
                start: "top 70%",
                end: "bottom top",

                toggleActions: "restart restart restart none",

                animation: t1,
            });
            ScrollTrigger.create({
                trigger: row,
                start: "top 70%",
                end: "bottom top",

                toggleActions: "restart restart restart none",

                animation: t2,
            });
        });
    }, {});

    return (
        <div className="services-content container-fluid">
            <div className="container">
                <div className="main-heading">Go Over Our Services</div>

                <ServicesRow
                    title={"Exclusive Leads"}
                    content={
                        "Lorem ipsum dolor sit amet consectetu adipisicing elit. Voluptates porro mollitia optio commodi? Error possimus non nulla omnis blanditiis sapiente earum, ducimus sint. Veniamassumenda officia nobis, asperiores quo ea?"
                    }
                    image={
                        "https://www.therealworldportal.com/wp-content/uploads/multiply-your-income.webp"
                    }
                />
                <ServicesRow
                    title={"Exclusive Leads"}
                    content={
                        "Lorem ipsum dolor sit amet consectetu adipisicing elit. Voluptates porro mollitia optio commodi? Error possimus non nulla omnis blanditiis sapiente earum, ducimus sint. Veniamassumenda officia nobis, asperiores quo ea?"
                    }
                    image={
                        "https://www.therealworldportal.com/wp-content/uploads/learn-all-digital-skills.webp"
                    }
                    imageFirst={true}
                />
                <ServicesRow
                    title={"Exclusive Leads"}
                    content={
                        "Lorem ipsum dolor sit amet consectetu adipisicing elit. Voluptates porro mollitia optio commodi? Error possimus non nulla omnis blanditiis sapiente earum, ducimus sint. Veniamassumenda officia nobis, asperiores quo ea?"
                    }
                    image={
                        "https://www.therealworldportal.com/wp-content/uploads/multiply-your-income.webp"
                    }
                />
            </div>
        </div>
    );
};
