import {Book, InitialState, Row} from "../reducers";
import {ALL_BOOKS_REMOVED_FROM_CART, BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART, StateAction} from "./index";

type ShoppingCart = InitialState['shoppingCart'];

const updateCartItems = (cartItems: Row[], item: Row, idx: number): Row[] => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateCartItem = (book: Book, item: Row = {
    id: book.id,
    count: 0,
    title: book.title,
    total: 0
}, quantity: number): Row => {

    const {id, count, title, total} = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    };
};

const updateOrder = (state: InitialState, bookId: number, quantity: number) => {
    const {bookList: {books}, shoppingCart: {cartItems}} = state;

    const book = books.find(({id}) => id === bookId)!;
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(book, item, quantity);
    const items = updateCartItems(cartItems, newItem, itemIndex);
    const totalCount = items.reduce<number>((prev, cur): number => {
        return prev + cur.total
    }, 0);
    let totalItemsCount = items.reduce<number>((prev, cur): number => {
        return prev + cur.count
    }, 0)
    return {
        orderTotal: totalCount,
        cartItems: items,
        numsItem: totalItemsCount
    };
};

export const updateShoppingCart = (state: InitialState, action: StateAction): ShoppingCart => {
    switch (action.type) {
        case BOOK_ADDED_TO_CART:
            return updateOrder(state, action.bookId, 1);

        case BOOK_REMOVED_FROM_CART:
            return updateOrder(state, action.bookId, -1);

        case ALL_BOOKS_REMOVED_FROM_CART:
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.bookId)!;
            return updateOrder(state, action.bookId, -item.count);

        default:
            return state.shoppingCart;
    }
};
