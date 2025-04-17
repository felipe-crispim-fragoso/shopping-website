import Button from '../../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { CartDropdownContext } from '../../../context/cart-dropdown.context';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    let navigate = useNavigate();
    const { cartItems } = useContext(CartDropdownContext);
    return <div className='cart-dropdown-container'>
        <div className='cart-items'>{cartItems && cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)}</div>
        <Button buttonClass='inverted' onClick={() => navigate('/checkout')} >Go to checkout</Button>
    </div>
};

export default CartDropdown;