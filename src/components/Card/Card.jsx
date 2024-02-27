import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";

/* eslint-disable react/prop-types */
const Card = (props) => {

    const { counter, setCounter } = useContext(ShoppingCartContext);


    return (
        <div className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-3 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-black/50 rounded-lg text-white text-xs m-2 px-3 py-0.5">{props.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src = {props.data.images[0]} alt={props.data.category.name} />
                <button 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white hover:bg-gray-200 text-black w-6 h-6 rounded-full m-2 p-1"
                    onClick= { () => setCounter(counter + 1) }>
                    +
                </button>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{props.data.title}</span>
                <span className="text-lg font-bold">{props.data.price}</span>
            </p>
        </div>
    )
}

export { Card }
