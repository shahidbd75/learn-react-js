import React from 'react';
import { useParams } from 'react-router';
import { fetchProducts } from '../../services/product.data.service';

const ProductDetails = () => {
    const data = fetchProducts();
    const {id}  = useParams();

    console.log(data);
    return (
        <div>
            <h1>Product Details</h1>
            <h3>Product Detail Id: {id}</h3>
        </div>
    );
};

export default ProductDetails;