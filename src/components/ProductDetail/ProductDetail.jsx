import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";

const ProductDetail = () => {

    const { isProductDetailOpen, closeProductDetail } = useContext(ShoppingCartContext);
    
    return (
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 top-[68px] border border-black rounded bg-white w-[360px] h-[calc(100vh-60px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button onClick={() => closeProductDetail()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </button>
            </div>
        </aside>
    )
}

export { ProductDetail };