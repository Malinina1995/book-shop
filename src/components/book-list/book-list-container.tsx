import React, {Component} from "react";
import './book-list.css';
import {Spinner} from "../spinner/spinner";
import {BookList} from "./book-list";
import {BookListPropsFromRedux, bookListConnector} from "./connector";

type Props = BookListPropsFromRedux & {}

class BookListContainer extends Component<Props> {

    componentDidMount(): void {
        const {getBooks} = this.props;
        getBooks();
    }

    render(): React.ReactNode {
        const {books, loading, onAddedToCart} = this.props;
        if(loading){
            return <Spinner/>
        }
        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
}

export default bookListConnector(BookListContainer);
