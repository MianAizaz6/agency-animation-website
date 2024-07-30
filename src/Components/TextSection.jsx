import { useRef, useEffect, useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useInView } from 'react-intersection-observer';
import glitch from "../assets/videos/glitch.mp4";

gsap.registerPlugin(ScrollTrigger);

const TextSection = () => {
    const textRef = useRef();
    const sectionRef = useRef();
    const videoRef = useRef(null);
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const [isVideoPlayed, setIsVideoPlayed] = useState(false);
    const [startedScrolling,setStartedScrolling] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (inView && !isVideoPlayed) {
            videoRef.current.play();
            setTimeout(() => {
                setIsVideoPlayed(true);
                // videoRef.current.pause();
                setShowContent(true);
            }, 1000);
        }

        const handleScroll = () => {
            const sectionHeight = sectionRef.current.offsetHeight;
                    
            if (window.scrollY >=  656 + (sectionHeight / 3))  {
              setStartedScrolling(true);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };

    }, [inView, isVideoPlayed]);


    useGSAP(() => {
        if (showContent) {

            const splitText = new SplitType(textRef.current, { types: 'lines' });
            console.log(splitText)
            gsap.set(splitText.lines, { opacity: 0.2 }); // Set initial low opacity for all lines

            splitText.lines.forEach((line, index) => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: `top+=${index * 50} center`, // Adjust the 50 to change the scroll distance between line animations
                        end: `top+=${(index + 1) * 50} center`,
                        scrub: true,
                        // markers: true, // Uncomment this line to see the trigger points for debugging
                    }
                })
                    .to(line, { opacity: 1, duration: 0.5 })
                    .to(line, { opacity: 0.2, duration: 0.5 }, "+=0.5");
            });
        }
    }, [showContent]);



    return (
        <div ref={ref} className={`container-fluid text-section  bg-black${isVideoPlayed ? '' : ''}`}>
            <div className='relative w-full' ref={sectionRef}>
                <video
                    ref={videoRef}
                    muted
                    loop
                    className={`${isVideoPlayed ? ' !z-20 ' : 'opacity-100'} ${startedScrolling ? 'fade-away' : ''}`}
                    playsInline
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                >
                    <source src={glitch} type="video/mp4" />
                </video>
                <div className={`container d-flex align-items-center relative !z-30 ${showContent ? 'visible grow-animate' : 'invisible'}`}>
                    <p ref={textRef} className="display-1">
                        A game-changing digital approach. Compelling content that converts. Strategic targeting with pinpoint accuracy. In-depth analytics for smarter decisions. And an exceptional rise in your online presence.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TextSection;