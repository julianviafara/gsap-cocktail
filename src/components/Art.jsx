import gsap from "gsap";
import {featureLists, goodLists} from "../../constants/index.js";
import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";

const Art = () => {
    const  isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top';

        const maskTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: "#art",
                start: start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true,
            }
        })
        maskTimeline.to('.will-fade', {
            opacity: 0,
            ease: 'power1.inOut',
            stagger: 0.02
        })
            .to('.masked-img', {
                escale: 1.3,
                maskPosition: 'center',
                maskSize: '400%',
                duration: 1,
                ease: 'power1.inOut',
                borderRadius: '50%',
            })
            .to('#masked-content', {
                opacity: 1,
                duration: 1,
                ease: 'power1.inOut',
            })
    })

    const maskedContentStyle = {
        opacity: isMobile ? 0 : 1,
        transform: isMobile ? 'translateY(100px)' : 'translateY(0px)',
        transition: 'all 1s ease-in-out',
    };
    return (
        <div id="art">
            <div className="container mx-auto h-full pt-20">
                <h2 className="will-fade"> The ART</h2>
                <div className="content">
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <img src={`${import.meta.env.BASE_URL}images/check.png`} alt="check" />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="cocktail-img">
                        <img
                            src={`${import.meta.env.BASE_URL}images/under-img.jpg`}
                            alt="cocktail"
                            className="abs-center masked-img size-full object-contain"
                        />
                    </div>
                    <ul className="space-y-4 will-fade">
                        {featureLists.map((feature, index) => (
                            <li key={index} className="flex items-center justify-start gap-2">
                                <img src={`${import.meta.env.BASE_URL}images/check.png`} alt="check" />
                                <p className="md:w-fit w-60">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="masked-container">
                    <h2 className="will-fade">Sip-Worthy Perfection</h2>
                    <div id="masked-content">
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>This isn’t just a drink. It’s a carefully
                            crafted moment made just for you.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Art;