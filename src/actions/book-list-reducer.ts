import {FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, StateAction} from "./index";
import {InitialState} from "../reducers";

type BookList = InitialState['bookList'];


export const updateBookList = (state: InitialState, action: StateAction): BookList => {

    switch (action.type) {
        case FETCH_BOOKS_REQUEST:
            return {
                books: [],
                loading: true
            };

        case FETCH_BOOKS_SUCCESS:
            return {
                books: action.books,
                loading: false
            };
        default:
            return state.bookList;
    }
};
