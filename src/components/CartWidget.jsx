import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import "./Styles.css/CartWidget.css"


const CartWidget = ()=>{
    return(
        <div className="cart-widget">
            <FontAwesomeIcon icon={faCartShopping} size="2x" color="white"/>
            <div className="qty-display"></div>
        </div>
    )
}

export default CartWidget