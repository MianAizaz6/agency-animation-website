import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { createContent, launchCampaign, marketingChannels, marketingGoals, monitorResults, refineStrategy, targetAudience } from "../../static-img-urls";

const StackingCard = () => {
    const stackedCardsRef = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let panels = gsap.utils.toArray(".stacking-card");

        for (let index = 0; index < panels.length; index++) {
            gsap.to(panels[index], {
                scrollTrigger: {
                    trigger: panels[index],
                    start: "top 80px",
                    end: "bottom 80px",
                    endTrigger: panels[panels.length - 1],
                    scrub: true,
                    pin: true,
                    pinSpacing: false,
                },
                scale: 0.8,
                y: 20 * index,
                x: 15 * index,
            });
        }
    }, {});

    const stackingCardContent = (title, subtitle, img) => (
        <div className="stacking-card">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
            <img className="object-contain" src={img} alt="" />
        </div>
    );

    return (
        <div className="stacking-container container-fluid hero-bg overflow-hidden">
            <div className="container pt-[150px] pb-[820px]">
                <div className="flex flex-col items-center">
                    <h1 className="main-heading">
                        Your Path to Digital Success
                    </h1>
                    <p className="text-white text-[36px] leading-[1.2] font-medium">
                        Our Strategic Blueprint for Managing Your Digital Marketing Efforts
                    </p>
                    {/* <h1 className="main-heading">UNIQUE SOLUTIONS</h1>
                    <p className="text-content">Developing a Strong Client Base</p> */}
                </div>
                <div ref={stackedCardsRef} className="stacking-cards">
                    {stackingCardContent(
                        "Define your target audience",
                        "Identify your ideal customer and their needs and preferences. ",
                        targetAudience
                    )}
                    {stackingCardContent(
                        "Set your marketing goals",
                        "Determine what you want to achieve with your campaigns.",
                        marketingGoals
                    )}
                    {stackingCardContent(
                        "Choose your marketing channels",
                        " Select the channels that are most relevant to your audience and goals",
                        marketingChannels
                    )}
                    {stackingCardContent(
                        "Create your content",
                        "Create engaging, informative, and relevant content to get the attention of your target audience",
                        createContent
                    )}
                    {stackingCardContent(
                        "Launch your campaign",
                        "Plan and execute your campaign, including creating ads, publishing content, and managing social media.",
                        launchCampaign
                    )}
                    {stackingCardContent(
                        "Monitor and measure your results",
                        "Track your campaign performance using analytics tools and adjust your strategy accordingly.",
                        monitorResults
                    )}
                    {stackingCardContent(
                        "Refine your strategy",
                        "Continuously analyze your results and refine your strategy to improve your campaign’s effectiveness.",
                        refineStrategy
                    )}
                </div>
                <div className="end-trigger"></div>
            </div>
        </div>
    );
};

export default StackingCard;
