import React from 'react';
import {useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";

function ProductListing(props) {
    const products = useSelector((state) => state)
    console.log(products);
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