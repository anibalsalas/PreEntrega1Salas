import './Navbar.css';
import { MdOutlineShoppingCart } from 'react-icons/md';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            
             <MdOutlineShoppingCart className="carrito"/> 
            <div className="qty-display">1</div>
        </div>

    )
}

export default CartWidget
