import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
    isCartOpen: false,
    toggleCartList: () => {}
});

export const CartDropdownProvider = ({ children }) => {
    const [isCartOpen, setCartOpen] = useState(false); 
    const toggleCartList = () => { 
        console.log('eita');
        setCartOpen(prevState => !prevState);
    }
    return <CartDropdownContext.Provider value={{isCartOpen, toggleCartList}}>
        {children}
    </CartDropdownContext.Provider>
}