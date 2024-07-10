import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
    return (
        <div className="simple-card">
            <div className="card-header">
                <img
                    src="https://www.cobratate.com/jointherealworld/images/image-87-1.webp"
                    alt=""
                />
                <div className="title">{data.title}</div>
            </div>
            <div className="subtitle">{data.subtitle}</div>
            <img
                src="https://www.cobratate.com/jointherealworld/images/crypto.jpg"
                alt=""
            />
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
                title: "E-Commerce",
                subtitle: "Sell profitable products online. Industry experts will train you to find winning products, create the perfect store, and generate traffic on your sites.",
            },
            {
                title: "Copywriting",
                subtitle: "Master the art of selling with words. We’ll give you an easy to follow guide on how to master the art of copywriting and secure a list of high-paying clients.",
            },
        ],
        [
            {
                title: "Stocks",
                subtitle: "Multiply your capital through the stock market. We’ll train you to use technical analysis to find situations where there’s a higher upside than the downside.",
            },
            {
                title: "Freelancing",
                subtitle: "You’ll learn how to get paid a premium price to complete simple tasks, And the most effective methods to build a list of loyal clients",
            },
        ],
        [
            {
                title: "Crypto Investing",
                subtitle: "Profit from the world’s highest-performing assets. We’ll focus on attacking crypto markets from 3 angles: Long-term, medium-term, and short-term.",
            },
            {
                title: "Business & Finance",
                subtitle: "Master the fundamental skills of business. We’ll teach you every skill the hyper successful entrepreneur of tomorrow needs to master.",
            },
        ],
    ];
    return (
        <section className="section">
            <div className="container p-0 cards">
                <div className="text-section">
                    <h1 className="main-heading">WHAT YOU WILL LEARN</h1>
                    <p className="text-content">When a new technology revolutionises an industry, THE REAL WORLD will be the first and only place to teach you how to profit from it.</p>
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
