import "../App.css"
import { PopupContextFunction } from "../Context/PopupContext";
import { gsap } from "gsap"
import { useRef, useLayoutEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About2() {

    const img2ref = useRef()
    const con2Ref = useRef()

    const { openPopup } = PopupContextFunction()

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(img2ref.current, {
                duration: 1,
                scale: .6,
                transformOrigin: 'bottom-left',
                delay: 0,
                scrollTrigger: {
                    trigger: con2Ref.current,
                    start: "top bottom",
                    toggleActions: "play none none none",
                    scrub: 2
                }
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className="about2" id="conference" ref={con2Ref}>
            <div>
                <span>Exclusive Entry to Interviews and Press Conferences</span>
                
                <span>
                    Immerse yourself in the world of Emilia Clarke's professional journey. With your Premium Identity Card, you gain exclusive access to interviews and press conferences, witnessing firsthand the moments that shape her career.
                </span>

                {/* <button className="abt-btn">
                    Get Membership
                </button> */}
            </div>

            <div>
                <div />
                <div>
                    <img src="./pix (3).jpg" ref={img2ref} alt="loading image" className="about-img" /> 
                </div>
            </div>
        </div>
    )
}

export default About2;