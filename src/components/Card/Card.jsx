const Card = () => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-3 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">Electronics</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/20141199/pexels-photo-20141199/free-photo-of-an-aerial-view-of-a-beach-and-a-boat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="headphones" />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    +
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">Headphones</span>
                <span className="text-lg font-bold">$300</span>
            </p>
        </div>
    )
}

export { Card }
