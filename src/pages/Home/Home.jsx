// import React from 'react'
import { Layout } from "../../components/Layout/Layout";
import { Card } from "../../components/Card/Card";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import { useFetch } from "../../hooks/useFetch";


function Home() {

    const apiUrl = 'https://api.escuelajs.co/api/v1';
    const data = useFetch(apiUrl);

    return (
        <Layout> 
            <div className="w-full max-w-screen-lg px-4 flex flex-col place-items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data?.map(producto => (
                    <Card   key = {producto.id}
                            data = {producto}/>
                ))}
            </div>
            <ProductDetail/>
        </Layout>
    )
}

export  { Home }
