import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import SplitType from "split-type";
import bgvideo from '../assets/videos/bgvideo.mp4';


const TextSection = () => {
    const text = useRef();
    useGSAP(() => {
        const char = new SplitType.create(text.current, "words");

        gsap.registerPlugin(ScrollTrigger);

        gsap.from(char.words, {
            scrollTrigger: {
                trigger: char.words,
                start: "top 70%",
                end: "bottom 20%",
                scrub: 2,
            },
            opacity: 0.2,
            duration: 2,
            stagger: 0.2,
        });
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
            <div className="container d-flex justify-content-center align-items-center">
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
