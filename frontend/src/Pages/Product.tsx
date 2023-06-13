import React from "react";
import { FunctionComponent } from "react";
import { useParams } from "react-router";

interface ProductProps {
    
}
 
const Product: FunctionComponent<ProductProps> = () => {

    const { id } = useParams()

    return ( <div>Product page <span>{id}</span> </div> );
}
 
export default Product;