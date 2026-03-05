import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-4 py-1 lg:mr-10 hover:bg-cyan-950 hover:text-white'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;