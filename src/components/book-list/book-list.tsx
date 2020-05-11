import React from "react";
import {BookListItem} from "../book-list-item/book-list-item";
import {Book} from "../../reducers";
import './book-list.css';
import {AddedToCartHandler} from './connector';

interface Props {
    books: Book[];
    onAddedToCart: AddedToCartHandler
}

export const BookList: React.FunctionComponent<Props> = ({books, onAddedToCart}) => {
    return (
        <ul className="book-list">
            {
                books.map(book => {
                    return <li key={book.id}>
                        <BookListItem book={book}
                                      onAddedToCart={() => onAddedToCart(book.id)}/>
                    </li>
                })
            }
        </ul>
    )
}
