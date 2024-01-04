import "../App.css"
import FrontTop from "../Components/FrontTop"
import About from "../Components/About";
import About2 from "../Components/About2";
import About3 from "../Components/About3";
import EmiliaInfo from "../Components/EmiliaInfo";
import Signup from "../Components/Signup";
import Footer from "../Components/Footer";
import Card from "../Components/Card";

function FrontPage() {
    return (
        <div className="front-page">
            <Signup />
            <FrontTop />
            <EmiliaInfo />
            <About />
            <About2 />
            <About3 />
            <Card />
            <Footer />
        </div>
    )
}

export default FrontPage;