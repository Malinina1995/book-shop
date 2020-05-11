import React from 'react';
import './shopping-cart-table.css';
import {InitialState, Row} from "../../reducers";
import {connect, ConnectedProps} from "react-redux";
import {allBooksRemovedFromCart, bookAddedToCart, bookRemovedFromCart} from "../../actions";

type Props = PropsFromRedux & {}

const ShoppingCartTable: React.FunctionComponent<Props> = ({items, total, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item: Row, idx: number) => {
        const {id, title, count, total} = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total} руб.</td>
                <td>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa fa-minus-circle"/>
                    </button>
                </td>
            </tr>
        );
    };
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>

            <div className="total">
                Total: {total} руб.
            </div>
        </div>
    );
};


const mapStateToProps = ({shoppingCart:  {cartItems, orderTotal}}: InitialState) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const ShoppingCartTableContainer = connector(ShoppingCartTable);

