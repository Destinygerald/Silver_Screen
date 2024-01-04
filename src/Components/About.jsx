import "../App.css"
import { PopupContextFunction } from "../Context/PopupContext";
import { gsap } from "gsap"
import { useRef, useLayoutEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {

    const img1ref = useRef()
    const con1Ref = useRef()

    const { openPopup } = PopupContextFunction();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(img1ref.current, {
                duration: 1,
                scale: .6,
                transformOrigin: 'bottom-left',
                delay: 0,
                scrollTrigger: {
                    trigger: con1Ref.current,
                    start: "top bottom",
                    toggleActions: "play none none none",
                    scrub: 2
                }
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className="about" id="invite" ref={con1Ref}>
            <div>
                <span>Exclusive Access and Invitation to Private Parties</span>

                <span>
                    Elevate your fan experience by gaining entry to intimate gatherings where you can celebrate and create lasting memories alongside Emilia Clarke. These exclusive events are designed to provide a unique insight into the personality behind the performances.
                </span>

                {/* <button className="abt-btn" onClick={openPopup} >
                    Get Membership
                </button> */}
            </div>

            <div>
                <div />
                <div>
                <img src="./pix (1).jpg" alt="loading image" ref={img1ref} className="about-img" />
                </div>
            </div>
        </div>
    )
}

export default About;