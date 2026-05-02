import {use} from 'react';

const Book = ({promise}) => {
    const books = use(promise);

    console.log(books);

    return (
        <div>
            
        </div>
    );
};

export default Book;