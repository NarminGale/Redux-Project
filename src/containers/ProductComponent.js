import React from 'react';
import {useSelector} from "react-redux";

function ProductComponent(props) {
    const products = useSelector((state) => state.allProducts.products)
    const {id, title} = products[0]

    return (
        <div className=" rounded border w-full bg-white">
                <img alt="card image" src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG"/>
                <div className="px-3 pb-2">
                    <div className="pt-3">
                        <div className="mb-2 text-base">
                            <span className="font-medium mr-2">{title}</span></div>
                    </div>
                </div>
        </div>
    )
}

export default ProductComponent;