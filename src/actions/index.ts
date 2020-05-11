import {Book, InitialState} from "../reducers";
import {BookService} from "../api/api";
import {ThunkAction} from 'redux-thunk';

const bookService = new BookService();

export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const BOOK_ADDED_TO_CART = 'BOOK_ADDED_TO_CART';
export const BOOK_REMOVED_FROM_CART = 'BOOK_REMOVED_FROM_CART';
export const ALL_BOOKS_REMOVED_FROM_CART = 'ALL_BOOKS_REMOVED_FROM_CART';

type BooksLoadedAction = {
    type: typeof FETCH_BOOKS_SUCCESS;
    books: Book[];
}

type BooksRequestedAction = {
    type: typeof FETCH_BOOKS_REQUEST;
}

type BooksAddedToCart = {
    type: typeof BOOK_ADDED_TO_CART;
    bookId: number
}

type BookRemovedFromCart = {
    type: typeof BOOK_REMOVED_FROM_CART;
    bookId: number
}

type AllBooksRemovedFromCart = {
    type: typeof ALL_BOOKS_REMOVED_FROM_CART;
    bookId: number
}

export type StateAction =
    BooksLoadedAction
    | BooksRequestedAction
    | BooksAddedToCart
    | BookRemovedFromCart
    | AllBooksRemovedFromCart;

const booksLoaded = (newBooks: Book[]): StateAction => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        books: newBooks
    }
}

const bookRequested = (): StateAction => {
    return {
        type: FETCH_BOOKS_REQUEST
    }
}

export const bookAddedToCart = (bookId: number): StateAction => {
    return {
        type: BOOK_ADDED_TO_CART,
        bookId
    }
}

export const bookRemovedFromCart = (bookId: number): StateAction => {
    return {
        type: BOOK_REMOVED_FROM_CART,
        bookId
    }
}

export const allBooksRemovedFromCart = (bookId: number): StateAction => {
    return {
        type: ALL_BOOKS_REMOVED_FROM_CART,
        bookId
    }
}

export const getBooks = (): ThunkAction<void, InitialState, unknown, StateAction> => {
    return async (dispatch) => {
        dispatch(bookRequested());
        let res = await bookService.getBooks();
        dispatch(booksLoaded(res));
    };
}

