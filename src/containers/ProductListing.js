import React, {useEffect} from 'react';
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

function ProductListing(props) {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchProducts = async () =>{
        let response = await axios.get('https://fakestoreapi.com/products').catch((err) => console.log(err))
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-8 p-12">
            <ProductComponent/>
        </div>
    );
}

export default ProductListing;