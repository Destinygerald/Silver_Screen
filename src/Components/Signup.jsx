import "../App.css"
import { PopupContextFunction } from "../Context/PopupContext";
import { BsX } from "react-icons/bs"
import { useEffect, useRef, useState } from "react"
import Popup2 from "./Popup2";
import { Popup2ContextFunction } from "../Context/PopupContext2";

function Signup() {

    const [ userInfo, setUserInfo ] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        zip: ""
    })

    const [ name, setName ] = useState();

    const { popup, closePopup } = PopupContextFunction()
    const { openModal,closeModal } = Popup2ContextFunction()

    const signRef = useRef()

    

    function Close(e) {
        if (!signRef.current.contains(e.target)){
            closePopup()
            closeModal()
            setUserInfo({
                name: "",
                email: "",
                password: "",
                address: "",
                zip: ""
            })
        }
    }

    function handleChange(e) {
        setUserInfo({...userInfo, [e.target.name]: e.target.value })
    }
    
    useEffect(() => {
        let signup = document.querySelector('.signup')
        if (!signup) return;
        
        signup.addEventListener('pointerdown', (e) => {
            Close(e)
        })

        return (() => {
            signup.removeEventListener('pointerdown', (e) => {
                Close(e)
            })
        })
    })

    function handleSubmit(e) {
        e.preventDefault();

        setName(userInfo.name)

        setUserInfo({
            name: "",
            email: "",
            phone: "",
            address: "",
            zip: "",
        })

        openModal()
    }

    return (
        <div className={popup ? "signup" : "signup-cls"}>
            <div className="signup-container" ref={signRef}>
                <div>
                    <img src="/sign-bck.jpg" className="sign-img" />
                    <span>
                        Become a Member
                    </span>
                </div>

                <div>

                    <span>Join</span>

                    <form className="signup-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Full Name" name="name" value={userInfo.name} onChange={handleChange} required />
                        <input type="email" placeholder="Email" name="email" value={userInfo.email} onChange={handleChange} required />
                        <input type="tel" placeholder="Phone Number" name="phone" value={userInfo.phone} onChange={handleChange} required />
                        <input type="text" placeholder="House Address" name="address" value={userInfo.address} onChange={handleChange} required />
                        <input type="nunmber" placeholder="Zip code" name="zip" value={userInfo.zip} onChange={handleChange} required />

                        <button className="sign-btn">
                            Join
                        </button>
                    </form>

                    <span className="exit" onClick={closePopup}><BsX /></span>

                    <Popup2 name={name} />

                </div>
            </div>
        </div>
    )
}

export default Signup;
