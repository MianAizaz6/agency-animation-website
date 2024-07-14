import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandedMarketing, ContentCreation, Ecommerce, LeadGeneration, Photographers, WebDesign } from "../../static-img-urls";

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
    return (
        <div className="simple-card-wrapper h-[90vh]">
            <div className="simple-card h-full gap-[30px]">
                <div className="bg-gradient-to-r from-[#00FFFF] to-[#40FFC0] w-[120px] h-[120px] flex justify-center items-center mx-auto rounded-full p-[5px] overflow-hidden">
                    <div className=" bg-black rounded-full p-[5px]">
                        <img
                            src={data.logo}
                            alt=""
                        />
                    </div>
                </div>
                <div className="title">{data.title}</div>
                <div className="subtitle">{data.subtitle}</div>
                {/* <img
                    src="https://www.cobratate.com/jointherealworld/images/crypto.jpg"
                    alt=""
                /> */}
            </div> 
        </div>
    );
};

const Cards = () => {
    useGSAP(() => {
        let panels = gsap.utils.toArray(".row-wrapper");

        panels.forEach((panel) => {
            ScrollTrigger.create({
                trigger: panel,
                start: () =>
                    panel.offsetHeight < window.innerHeight
                        ? "top top"
                        : "bottom bottom",

                scrub: 2,
                pin: true,
                pinSpacing: false,
            });
        });
    }, []);

    const cardData = [
        [
            {
                logo: LeadGeneration,
                title: "Lead Generation via Paid Ads",
                subtitle: "Boost your customer acquisition with targeted paid ad campaigns. Our expert team leverages data-driven strategies to ensure your ads reach the right audience, driving high-quality leads and maximizing your ROI.",
            },
            {
                logo: ContentCreation,
                title: "Organic Content Creation",
                subtitle: "Enhance your brand's online presence with engaging and authentic content. Our content creation team produces SEO-optimized blogs, social media posts, and multimedia content that resonates with your audience and improves organic search rankings.",
            },
        ],
        [
            {
                logo: BrandedMarketing,
                title: "Branded Marketing Approaches",
                subtitle: "Strengthen your brand identity with our customized marketing strategies. We develop and implement cohesive branding campaigns that convey your unique value proposition and foster customer loyalty.",
            },
            {
                logo: Photographers,
                title: "Professional Photographers",
                subtitle: "Capture your brand's essence with high-quality visuals. Our professional photographers provide stunning images that elevate your brand's aesthetic and enhance your marketing materials, making a lasting impression on your audience.",
            },
        ],
        [
            {
                logo: WebDesign,
                title: "Premium Website Designs",
                subtitle: "Transform your online presence with a sleek, user-friendly website. Our web design experts create responsive and visually appealing websites that reflect your brand's identity and offer an optimal user experience to convert visitors into customers.",
            },
            {
                logo: Ecommerce,
                title: "E-commerce Setup & Solutions",
                subtitle: "Launch and optimize your online store with our comprehensive e-commerce solutions. We offer end-to-end services, including platform selection, setup, and integration, ensuring a seamless shopping experience that drives sales and customer satisfaction.",
            },
        ],
    ];
    return (
        <section className="section">
            <div className="container p-0 cards">
                <div className="text-section">
                    <h1 className="main-heading">Tailored Digital Strategies</h1>
                    <p className="text-content">Transforming Your Digital Presence with Expert Solutions</p>
                    {/* <h1 className="main-heading">UNIQUE SOLUTIONS</h1>
                    <p className="text-content">Developing a Strong Client Base</p> */}
                </div>
                {cardData.map((pair, i) => (
                    <div key={i} className={`row-wrapper`}>
                        {pair.map((item, index) => (
                            <div
                                key={index}
                                className={`card-wrapper card-wrapper-${(index + i) % 2 ? 0 : 1
                                    }`}
                            >
                                <Card data={item} />
                            </div>
                        ))}
                    </div>
                ))}
                <div className="spacer"></div>
                <div className="spacer"></div>
            </div>
        </section>
    );
};

export default Cards;
