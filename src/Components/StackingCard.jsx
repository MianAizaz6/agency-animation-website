import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

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
                x: -20 * index,
            });
        }
    }, {});

    const stackingCardContent = (title, subtitle, img) => (
        <div className="stacking-card">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
            <img src={img} alt="" />
        </div>
    );

    return (
        <div className="stacking-container container-fluid hero-bg">
            <div className="container">
                <div ref={stackedCardsRef} className="stacking-cards">
                    {stackingCardContent(
                        "All the music and more 🤘",
                        "110+ million tracks ad-free on all of your devices, Lossless and exclusive playlists.",
                        "https://www.napster.com/us/wp-content/uploads/sites/5/2024/05/card-1-lg.png"
                    )}
                    {stackingCardContent(
                        "All the music and more 🤘",
                        "110+ million tracks ad-free on all of your devices, Lossless and exclusive playlists.",
                        "https://www.napster.com/us/wp-content/uploads/sites/5/2024/05/card-1-lg.png"
                    )}
                    {stackingCardContent(
                        "All the music and more 🤘",
                        "110+ million tracks ad-free on all of your devices, Lossless and exclusive playlists.",
                        "https://www.napster.com/us/wp-content/uploads/sites/5/2024/05/card-1-lg.png"
                    )}
                </div>
                <div className="end-trigger"></div>
            </div>
        </div>
    );
};

export default StackingCard;
