import './product-card.style.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown.context';

const ProductCard = ({product}) => {
    const { addItemToCart } = useContext(CartDropdownContext);
    return <div className='product-card-container'>
        <img src={product.imageUrl} alt={`${product.name}`} />
        <div className='footer'>
            <span className='name'>{product.name}</span>
            <span className='price'>{product.price}</span>
        </div>
        <Button type="button" buttonClass="inverted" onClick={() => addItemToCart(product)}>Add to cart</Button>
    </div>
};

export default ProductCard;