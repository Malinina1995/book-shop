import React from "react";
import {Book} from "../../reducers";
import './book-list-item.css';

interface Props {
    book: Book,
    onAddedToCart: () => void
}

export const BookListItem: React.FunctionComponent<Props> = ({book, onAddedToCart}) => {
    const {title, author, coverImage, price} = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="cover"/>
            </div>
            <div className="book-details">
                <a href="/" className="book-title">{title}</a>
                <div className="book-author">{author}</div>
                <div className="book-price">{price} руб.</div>
                <button
                    onClick={onAddedToCart}
                    className="btn btn-info add-to-cart">Add to cart</button>
            </div>

        </div>
    )
}
