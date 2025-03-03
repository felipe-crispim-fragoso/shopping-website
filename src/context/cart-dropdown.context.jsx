import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
    isCartOpen: false,
    toggleCartList: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

export const CartDropdownProvider = ({ children }) => {
    const [isCartOpen, setCartOpen] = useState(false); 
    const toggleCartList = () => { 
        setCartOpen(prevState => !prevState);
    }

    const [cartItems, setCartItems] = useState([]);
    const addItemToCart = (product) => {
        setCartItems(prevCartItems => {
            const existingItem = prevCartItems.find(cartItem => cartItem.id === product.id);

            if (existingItem) {
                return prevCartItems.map(cartItem =>
                    cartItem.id === product.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCartItems, { ...product, quantity: 1 }];
            }
        });
    };

    return <CartDropdownContext.Provider value={{isCartOpen, toggleCartList, cartItems, addItemToCart}}>
        {children}
    </CartDropdownContext.Provider>
}