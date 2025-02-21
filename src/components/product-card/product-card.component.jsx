import './product-card.style.scss';
import Button from '../button/button.component';

const ProductCard = ({name, price, imageUrl}) => {
    return <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button type="button" buttonClass="inverted" onClick={() => {}}>Add to cart</Button>
    </div>
};

export default ProductCard;