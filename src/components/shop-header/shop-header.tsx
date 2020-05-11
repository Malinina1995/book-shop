import React from 'react';
import {Link} from "react-router-dom";
import './shop-header.css';
import {connect} from "react-redux";
import {InitialState} from "../../reducers";

interface Props {
    numsItem: number;
    orderTotal: number;
}

export const ShopHeader: React.FunctionComponent<Props> = ({ numsItem, orderTotal }) => {
    return (
        <header className="shop-header row">
            <Link className="logo text-dark" to="/">ReStore</Link>
            <Link className="shopping-cart" to='/cart'>
                <i className="cart-icon fa fa-shopping-cart" />
                {numsItem} items ({orderTotal} руб.)
            </Link>
        </header>
    );
};

const mapStateToProps = ({shoppingCart: {orderTotal, numsItem}}: InitialState) => {
    return {
        orderTotal, numsItem
    }
}

export const ShopHeaderContainer = connect(mapStateToProps)(ShopHeader);
