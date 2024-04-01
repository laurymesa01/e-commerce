const OrderCart = (props) => {
    const { title, imageUrl, price } = props;
    return(
        <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src = {imageUrl} alt = {title} />
                </figure>
                <p className="text-sm font-light pr-6">{title}</p>
            </div>
            <div className="flex flex-row gap-3" >
                <p className="text-lg font-medium">{price}</p>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export { OrderCart };