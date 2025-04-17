import './checkout-item.style.scss';
import { CartDropdownContext } from '../../context/cart-dropdown.context';
import { useContext } from 'react';

const CheckoutItem = ( {cartItem} ) => {
    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartDropdownContext);
    return <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={cartItem.imageUrl} />
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItemFromCart(cartItem)}>
                &#10094;
            </div>
            <span className='value'>{cartItem.quantity}</span>
            <div className='arrow' onClick={() => addItemToCart(cartItem)}>
                &#10095;
            </div>
        </span>
        <span className='price'>{cartItem.price}</span>
        <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
};

export default CheckoutItem;