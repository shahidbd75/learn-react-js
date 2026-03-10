import React from 'react';

const Header = () => {
    return (
        <div>
            <h2 className='text-2xl text-center'>Product Management</h2>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="./products">Products</a></li>
                    <li><a href="./checkout">Checkout</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;