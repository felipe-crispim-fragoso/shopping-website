import { createContext, useEffect, useState } from "react";
import SHOP_DATA from '../shop-data.json';

export const ShopDataContext = createContext({
    shoppingData: null
});

export const ShopDataProvider = ({ children }) => {
    const [shoppingData, setShoppingData] = useState(null); 

    useEffect(() => {
       setShoppingData(SHOP_DATA);
    }, [])

    return <ShopDataContext.Provider value={{shoppingData}}>
        {children}
    </ShopDataContext.Provider>
}