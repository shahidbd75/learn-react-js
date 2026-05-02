import {use} from 'react';
import Product from './Product';

const Products = ({promise}) => {
    const products = use(promise);

    console.log(products);

    return (
        <div className="grid lg:grid-cols-3 gap-5 grid-cols-1 md:grid-cols-2 p-2">
            {products.data.map(product => <Product key={product._id} product={product}></Product>)}
        </div>
    );
};

export default Products;