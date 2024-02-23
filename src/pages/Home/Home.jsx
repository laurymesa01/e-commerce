// import React from 'react'
import { Layout } from "../../components/Layout/Layout";
import { Card } from "../../components/Card/Card";
import { useFetch } from "../../hooks/useFetch";


function Home() {

    const apiUrl = 'https://fakestoreapi.com';
    const data = useFetch(apiUrl);

    return (
        <Layout> 
            <div className="w-full max-w-screen-xl px-4 flex flex-col place-items-center sm:grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {data?.map(producto => (
                    <Card   key = {producto.id}
                            data = {producto}/>
                ))}
            </div>
            
        </Layout>
    )
}

export  { Home }
