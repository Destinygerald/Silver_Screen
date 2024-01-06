import "../App.jsx"
import { HashLink as Link } from "react-router-hash-link"

function Footer() {
    return (
        <div className="footer">
            <span className="ftt-bck">Emilia Clarke</span>

            <span>
                
            </span>

            <div className="footer-main">
                <div>
                    <img src="uxvcsohu2.png" alt="logo"  className="btm-logo" />

                    <ul>
                        <li><Link to="#about"> About </Link></li>
                        <li><Link to="#invite"> Invite </Link></li>
                        <li><Link to="#conference"> Conferences </Link></li>
                        <li><Link to="#sp"> Stage Performance </Link></li>
                    </ul>
                </div>
                <span>
                    Don't miss out on this extraordinary opportunity. Acquire your Premium Identity Card today and be part of a select group that experiences Emilia Clarke like never before.
                </span>
            </div>

            
        </div>
    )
}

export default Footer;
