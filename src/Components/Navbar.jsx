import "../App.css"
import { PopupContextFunction } from "../Context/PopupContext";
import { HashLink as Link } from "react-router-hash-link"

function Navbar() {

    const { openPopup } = PopupContextFunction()

    return (
        <div className="navbar">

            <div className="logo"><img src="/uxvcsohu2.png" alt="logo" /></div>

            <ul>
                <li><Link to="#about"> About </Link></li>
                <li><Link to="#invite"> Invite </Link></li>
                <li><Link to="#conference"> Conferences </Link></li>
                <li><Link to="#sp"> Stage Performance </Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
