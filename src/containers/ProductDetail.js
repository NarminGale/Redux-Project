import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import {selectedProduct} from "../redux/actions/productActions";

function ProductDetail() {
    const productDetail = useSelector((state) => state?.allProducts?.products)
    const {product} = useParams()
    const dispatch = useDispatch()

    const {title, image, price, category, description} = productDetail

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${product}`).catch(err => console.log(err))
        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        if (product && product !== ""){
            fetchProductDetail()
        }
    }, [product])

    return (
        <div className="flex p-20 space-x-14 justify-center items-center">
            {Object.keys(productDetail).length === 0 ? (
                <h1>...Loading</h1>
            ) : (
                <>
                    <img className="h-[20rem]" alt="card image" src={image}/>
                    <div className="px-3 pb-2">
                        <div className="pt-3">
                            <div className="mb-2 text-base">
                                <span className="font-medium mr-2">{title}</span>
                            </div>
                            <div className="price">
                                {price}
                            </div>
                            <div className="category mb-1">
                                {category}
                            </div>
                            <div className="description">
                                {description}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ProductDetail