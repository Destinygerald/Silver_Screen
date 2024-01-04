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
            <span>Congrats { name || "----" }, you are now a Member</span>
            <button onClick={Close} > Continue </button>
        </div>
    )
}

export default Popup2;