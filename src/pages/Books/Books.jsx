import {Suspense} from 'react';
import Book from './Book';

const Books = () => {    
    const bookPromise = fetch('../data/products.json').then(res => res.json()).catch(error => console.log(error));
    
    return (
        <div>
            <h1 className="text-2xl text-center p-2">Books</h1>
           <Suspense fallback={<div>Loading...</div>}>
                <Book promise={bookPromise}></Book>
           </Suspense>
        </div>
    );
};

export default Books;