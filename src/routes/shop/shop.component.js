import { useContext } from 'react';
import { ShopDataContext } from '../../context/shop_data.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.style.scss';

const Shop = () => {
    const { shoppingData } = useContext(ShopDataContext);
    return <div className='products-container'>
    {
        shoppingData && shoppingData.map(product => <ProductCard key={product.id} {...product}/> )
    }
    </div>
};

export default Shop;