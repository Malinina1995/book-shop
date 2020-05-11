import {updateBookList} from "../actions/book-list-reducer";
import {updateShoppingCart} from '../actions/shopping-cart-reducer';
import {StateAction} from "../actions";
import { combineReducers } from "redux";

export interface Book {
    id: number;
    title: string;
    author: string;
    coverImage: string;
    price: number
}

export interface Row {
    id: number;
    title: string;
    count: number;
    total: number
}

export interface InitialState {
    bookList: {
        books: Book[];
        loading: boolean;
    },
    shoppingCart: {
        cartItems: Row[];
        orderTotal: number;
        numsItem: number
    }
}

export const initialState: InitialState = {
    bookList: {
        books: [],
        loading: true
    },
    shoppingCart: {
        cartItems: [],
        orderTotal: 0,
        numsItem: 0
    }
}

export const booksReducer = (state = initialState, action: StateAction): InitialState => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    };
};


