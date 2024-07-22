import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import SplitType from "split-type";
import bgvideo from "../assets/videos/bgvideo.mp4";

const TextSection = () => {
    const text = useRef();
    useGSAP(() => {
        const char = new SplitType.create(text.current, { split: "lines" });

        gsap.registerPlugin(ScrollTrigger);

        console.log(char.lines);

        for (let i = 0; i < char.lines.length; i++) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: char.lines[i],
                    start: "top 50%",
                    end: "bottom 40%",
                    scrub: 2,
                },
            })
                .to(char.lines[i], {
                    color: "white",
                    scale: 1.1,
                })
                .to(char.lines[i], {
                    color: "rgba(255, 255, 255, 0.271)",
                    scale: 1,
                });
        }
    }, []);

    return (
        <div className="container-fluid text-section">
            <video
                autoPlay
                muted
                loop
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            >
                <source src={bgvideo} type="video/mp4" />
            </video>
            <div className="container d-flex align-items-center">
                <p ref={text} className="display-1">
                    A dramatically more powerful camera system. A display so
                    responsive, every interaction feels new again. The world’s
                    fastest smartphone chip. Exceptional durability. And a huge
                    leap in battery life.
                </p>
            </div>
        </div>
    );
};

export default TextSection;
