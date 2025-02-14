import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    loggedUser: null
});

export const UserProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState(null); 

    // defines callback to handle the login from firebase.
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
            // maybe its a new user. Next line grants creation.
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setLoggedUser(user);
        })
        return unsubscribe;
    }, [])

    return <UserContext.Provider value={{loggedUser}}>
        {children}
    </UserContext.Provider>
}