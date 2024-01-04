import "../App.css"
import { PopupContextFunction } from "../Context/PopupContext";
import { gsap } from "gsap"
import { useRef, useLayoutEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About3() {

    const img3ref = useRef()
    const con3Ref = useRef()

    const { openPopup } = PopupContextFunction()

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(img3ref.current, {
                duration: 1,
                scale: .6,
                transformOrigin: 'bottom-left',
                delay: 0,
                scrollTrigger: {
                    trigger: con3Ref.current,
                    start: "top bottom",
                    toggleActions: "play none none none",
                    scrub: 2
                }
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className="about" id="sp" ref={con3Ref}>
            <div>
                <span>Backstage Pass for Stage Performances</span>

                <span>
                Step into the heart of the action with a backstage pass that grants you behind-the-scenes access to Emilia's stage performances. Witness the magic unfold from a perspective reserved for the most dedicated admirers.
                </span>

                <button className="abt-btn" onClick={openPopup}>
                    Get Membership
                </button>
            </div>

            <div>
                <div />
                <div>
                <img src="./pix (2).jpg" alt="loading image" ref={img3ref} className="about-img" />
                </div>
            </div>
        </div>
    )
}

export default About3;