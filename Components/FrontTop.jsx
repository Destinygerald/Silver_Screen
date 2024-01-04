import "../App.css"
import { PopupContextFunction } from "../Context/PopupContext";
import { gsap } from "gsap"
import { useRef, useLayoutEffect } from "react"

function FrontTop() {

    const imgRef = useRef();

    const { openPopup } = PopupContextFunction()

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(imgRef.current, {
                x: -1920,
                duration: 1.8,
                delay: 0
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className="front-top">
            <img src="./pix (4).jpg" alt="loading" ref={imgRef} />

            <div className="front-top-sides">
                <div></div>
                <div>
                    {/* <span>Emilia Clarke</span> */}
                </div>
            </div>

            <div className="top-container">
                <div>
                    <span>Unlock Unprecedented Access</span>
                    <span>Embrace the Exclusive World of Emilia Clarke with Premium Identity Cards. At Silver Screen Associates, we are delighted to present an unparalleled opportunity for our cherished supporters to immerse themselves in the enchanting universe of Emilia Clarke.</span>
                </div>

                <button onClick={openPopup}>Get Membership</button>
            </div>
        </div>
    )
}

export default FrontTop;