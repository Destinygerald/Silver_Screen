import "../App.css"
import { Popup2ContextFunction } from "../Context/PopupContext2";
import { PopupContextFunction } from "../Context/PopupContext"; 

function Popup2({name}) {

    const { modal, closeModal } = Popup2ContextFunction();
    const { closePopup } = PopupContextFunction();

    function Close() {
        closeModal();
        closePopup();
    }

    return (
        <div className={ modal ? "popup2" : "popup2close"}>
            <span> Congratulations, your application has been submitted. We will review your application and get back to you within 2 business days</span>
            <button onClick={Close} > Continue </button>
        </div>
    )
}

export default Popup2;
