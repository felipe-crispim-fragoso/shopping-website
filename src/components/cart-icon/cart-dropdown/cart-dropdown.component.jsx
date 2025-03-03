import Button from '../../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { CartDropdownContext } from '../../../context/cart-dropdown.context';

const CartDropdown = () => {
    const { cartItems } = useContext(CartDropdownContext);
    return <div className='cart-dropdown-container'>
        <div className='cart-items'>{cartItems && cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)}</div>
        <Button buttonClass='inverted'>Go to checkout</Button>
    </div>
};

export default CartDropdown;