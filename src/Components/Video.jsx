import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import iphoneVideo from '../assets/videos/Iphone_Video.mp4';

const Video = () => {
    const videoRef = useRef();
    const imageRef = useRef();
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(videoRef.current, {
            scrollTrigger: {
                trigger: videoRef.current,
                start: "350px top",
                end: "center",
                scrub: 1,
                pin: true,
                pinSpacing: false,
            },
            width: "600px",
        });

        gsap.to(imageRef.current, {
            scrollTrigger: {
                trigger: imageRef.current,
                start: "350px top",
                end: "center",
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
                    <video
                        autoPlay
                        muted
                        loop
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <source src={iphoneVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </>
    );
};

export default Video;
