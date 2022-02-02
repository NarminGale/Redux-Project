import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {productReducer} from "../redux/reducers/productReducer";

function ProductComponent(props) {
    const products = useSelector((state) => state?.productStore?.products)
    console.log(products)
    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product
        return (
            <div className=" rounded border w-full bg-white" key={id}>
                <Link to={`/product/${id}`}>
                    <img className="h-26" alt="card image" src={image}/>
                    <div className="px-3 pb-2">
                        <div className="pt-3">
                            <div className="mb-2 text-base">
                                <span className="font-medium mr-2">{title}</span>
                            </div>
                            <div className="price">
                                {price}
                            </div>
                            <div className="category">
                                {category}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return <>{renderList}</>
}

export default ProductComponent;