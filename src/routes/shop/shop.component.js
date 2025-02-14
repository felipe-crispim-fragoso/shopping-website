import { Fragment, useContext } from 'react';
import { ShopDataContext } from '../../context/shop_data.context';

export const Shop = () => {
    const { shoppingData } = useContext(ShopDataContext);
    return <Fragment>
    {
        shoppingData.map(product => 
            <div>
                {product.name}
            </div>
        )
    }
    </Fragment>
}