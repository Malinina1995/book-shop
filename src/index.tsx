import React from 'react';
import {render} from 'react-dom';
import {App} from './components/app/app';
import {Provider} from "react-redux";
import {store} from "./store";
import {ErrorBoundary} from "./components/error-boundary/error-boundary";

render(
    <Provider store={store}>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
