import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";

/* eslint-disable react/prop-types */
const Card = (props) => {

    const { counter, 
            setCounter, 
            openProductDetail, 
            setProductToShow, 
            shoppingCart, 
            setShoppingCart, 
            openCheckoutSideMenu 
        } = useContext(ShoppingCartContext);

    const showProduct = (productDetail) =>{
        openProductDetail();
        setProductToShow(productDetail);
    }

    const addProductsToCart = (productData, event) => {
        event.stopPropagation();
        setCounter(counter + 1);
        setShoppingCart([...shoppingCart, productData]);
        openCheckoutSideMenu();
    }

    const renderIcon = (id) => {
        const index = shoppingCart.findIndex(product => product.id === id)
        if (index != -1) {
            return (
                <button className="absolute top-0 right-0 flex justify-center items-center bg-black text-white w-6 h-6 rounded-full m-2 p-1"
                        onClick= { (event) => addProductsToCart(props.data, event) }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </button>
            )
        }
        else{
            return (
                <button className="absolute top-0 right-0 flex justify-center items-center bg-white hover:bg-gray-200 text-black w-6 h-6 rounded-full m-2 p-1"
                        onClick= { (event) => addProductsToCart(props.data, event) }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            )
        }

    }


    return (
        <div    className="bg-white cursor-pointer w-56 h-60" 
                onClick={() => showProduct(props.data)}>
            <figure className="relative mb-3 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-black/50 rounded-lg text-white text-xs m-2 px-3 py-0.5">{props.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src = {props.data.images[0]} alt={props.data.category.name} />
                {
                    renderIcon(props.data.id)
                }
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{props.data.title}</span>
                <span className="text-lg font-bold">${props.data.price}</span>
            </p>
        </div>
    )
}

export { Card }
