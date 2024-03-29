import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {

    //Shopping Cart Increment Quantity
    const [counter, setCounter] = useState(0);

    //Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //Product Detail Show Product
    const [productToShow, setProductToShow] = useState({});

    //Shopping cart Add product to cart

    const [shoppingCart, setShoppingCart] = useState([]);



    return (
        <ShoppingCartContext.Provider value={{            
            counter,
            setCounter,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            shoppingCart,
            setShoppingCart
        }}>
            { children }
        </ShoppingCartContext.Provider>        
    )
}

export { ShoppingCartProvider, ShoppingCartContext }
