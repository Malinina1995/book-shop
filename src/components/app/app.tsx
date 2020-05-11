import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {HomePage} from "../pages/home-page";
import {CartPage} from "../pages/cart-page";
import {ShopHeaderContainer} from "../shop-header/shop-header";

export const App: React.FunctionComponent = () => {
    return (
        <main role="main" className="container">
            <Router>
                <ShopHeaderContainer/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/cart' component={CartPage}/>
                </Switch>
            </Router>
        </main>
    )
}

