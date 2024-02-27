import './ProductDetail.css';

const ProductDetail = () => {
    return (
        <aside className="product-detail flex flex-col fixed right-0 top-[68px] border border-black rounded bg-white w-[360px] h-[calc(100vh-60px)]">
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>x</div>
            </div>
        </aside>
    )
}

export { ProductDetail };