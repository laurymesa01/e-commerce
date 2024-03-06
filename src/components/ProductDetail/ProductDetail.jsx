import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";

const ProductDetail = () => {

    const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext);
    
    return (
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} p-6 flex flex-col fixed right-0 top-[68px] border border-black rounded bg-white w-[360px] h-[calc(100vh-60px)]`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button onClick={() => closeProductDetail()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </button>
            </div>

            <div className="flex overflow-y-auto flex-col mt-6">
                <figure>
                    <img    className="w-full h-full rounded-lg" 
                            src = {productToShow.images[0]} 
                            alt = {productToShow.title} 
                    />
                </figure>
                <span className=" mt-4 font-medium text-2xl ">${productToShow.price}</span>
                <span className="font-medium text-md">{productToShow.title}</span>
                <span className="mt-6 font-light text-sm text-justify">{productToShow.description}</span>
            </div>
            
        </aside>
    )
}

export { ProductDetail };