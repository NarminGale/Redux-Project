import React, {useEffect} from 'react';
import axios from 'axios'
import {useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";

function ProductListing(props) {
    const products = useSelector((state) => state)
    console.log(products);

    const fetchProducts = async () =>{
        const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log(err)
        })
        console.log(response)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-8 p-12">
            <ProductComponent/>
            <ProductComponent/>
            <ProductComponent/>
            <ProductComponent/>
        </div>
    );
}

export default ProductListing;