import { createStore, applyMiddleware} from 'redux';
import { booksReducer} from "./reducers";
import thunkMiddleware from "redux-thunk";

export const store = createStore(booksReducer, applyMiddleware(thunkMiddleware));
