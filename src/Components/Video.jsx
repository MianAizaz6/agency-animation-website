import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import ReactPlayer from "react-player/lazy";

const Video = () => {
    const videoRef = useRef();
    const imageRef = useRef();
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(videoRef.current, {
            scrollTrigger: {
                trigger: videoRef.current,
                start: "550px top",
                end: () => "+=800px",
                scrub: 1,
                pin: true,
                pinSpacing: false,
            },
            width: "600px",
        });

        gsap.to(imageRef.current, {
            scrollTrigger: {
                trigger: imageRef.current,
                start: "450px top",
                end: () => "+=800px",
                scrub: 1,
                pinSpacing: false,
            },
            opacity: 1,
        });
    }, {});
    return (
        <>
            <div className="p-0 container-fluid  video-section">
                <div ref={videoRef} className="animation-wrapper">
                    <img
                        ref={imageRef}
                        src="https://cdn-imgs.dora.run/design/JEocbgdTccFFh4Bo5VAwn5.png/w/4096/h/4096/format/webp?"
                        alt=""
                    />
                    <ReactPlayer
                        playing
                        loop
                        height="100%"
                        width={"100%"}
                        url="//cdn-design-e.dora.run/I2/PG/nl/I2PGnlN47X0IbGLcG7qOCT.mp4"
                    />
                </div>
            </div>
        </>
    );
};

export default Video;
