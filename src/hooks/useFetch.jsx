/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';

const useFetch = (apiUrl) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [ apiUrl ])

    return products;
}

export  { useFetch };
