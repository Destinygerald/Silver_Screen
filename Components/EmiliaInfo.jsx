import "../App.css"
import { PopupContextFunction } from "../Context/PopupContext";

function EmiliaInfo() {

    const { openPopup } = PopupContextFunction()

    return (
        <div className="em-info" id="about">
            <span>
                About Emilia Clarke
            </span>

            <div>
                Emilia Clarke, a luminary in her own right, leads a dynamic and demanding professional life. Central to our commitment is the understanding that her health is not just a priority but an invaluable asset for the management and the entire fan community. Even during times when Emilia is not engaged in physical activities related to her career, the emphasis on her well-being remains steadfast, with good rest being a cornerstone of this commitment.
            </div>

            <div className="em-bck">
                Emilia Clarke
            </div>

            {/* <button className="em-btn" onClick={openPopup}>
                Get Membership
            </button> */}
        </div>
    )
}

export default EmiliaInfo;