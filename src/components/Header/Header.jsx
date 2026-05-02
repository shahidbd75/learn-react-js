import React from 'react';
import { NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2 className='text-2xl text-center'>Product Management</h2>
            <nav>
                <ul className='flex gap-3 justify-center m-3 p-1'>
                    <li><NavLink  className="p-2" to="/">Home</NavLink></li>
                    <li><NavLink  className="p-2" to="../about">About</NavLink></li>
                    <li><NavLink  className="p-2" to="products">Products</NavLink></li>
                    <li><NavLink  className="p-2" to="checkout">Checkout</NavLink></li>
                    <li><NavLink  className="p-2" to="users">Users</NavLink></li>
                    <li><NavLink  className="p-2" to="users2">Users2</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;