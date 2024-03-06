import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {

    const [counter, setCounter] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

    const openProductDetail = () => setIsProductDetailOpen(true);

    const closeProductDetail = () => setIsProductDetailOpen(false);

    return (
        <ShoppingCartContext.Provider value={{            
            counter,
            setCounter,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail
        }}>
            { children }
        </ShoppingCartContext.Provider>        
    )
}

export { ShoppingCartProvider, ShoppingCartContext }
