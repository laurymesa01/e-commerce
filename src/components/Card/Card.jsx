/* eslint-disable react/prop-types */
const Card = (props) => {

    return (
        <div className="bg-white cursor-pointer w-60 h-80">
            <figure className="relative mb-3 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-black/50 rounded-lg text-white text-xs m-2 px-3 py-0.5">{props.data.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src = {props.data.image} alt="headphones" />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-blue-400 text-white w-6 h-6 rounded-full m-2 p-1">
                    +
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{props.data.title}</span>
                <span className="text-lg font-bold">{props.data.price}</span>
            </p>
        </div>
    )
}

export { Card }
