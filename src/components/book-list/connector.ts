import {connect, ConnectedProps} from "react-redux";
import {InitialState} from "../../reducers";
import {bookAddedToCart, getBooks} from "../../actions";

const mapStateToProps = ({bookList: {books, loading}}: InitialState) => {
    return {books, loading}
}

const mapDispatchToProps = {
    getBooks,
    onAddedToCart: bookAddedToCart
}

export const bookListConnector = connect(mapStateToProps, mapDispatchToProps);
export type BookListPropsFromRedux = ConnectedProps<typeof bookListConnector>;
export type AddedToCartHandler = BookListPropsFromRedux["onAddedToCart"];
