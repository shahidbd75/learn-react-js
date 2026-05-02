import React, { Suspense } from 'react';
import Banner from './Banner';
import Books from '../Books/Books';
import Products from '../Products/Products';


const Home = () => {
    const productsPromise = fetch('https://fakestoreapiserver.reactbd.org/api/products').then(res => res.json()).catch(error => console.log(error));

    return (
        <div>
            <Banner></Banner>
            {/* <Books></Books> */}
            <Suspense fallback={<div>Loading...</div>}>
                <h1 className="text-2xl text-center p-2">Products</h1>
                <Products promise={productsPromise}></Products>
            </Suspense>
        </div>
    );
};

export default Home;