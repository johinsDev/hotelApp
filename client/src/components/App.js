// IMPORT PACKAGES

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

// IMPORT STORE

import { createAppStore } from '../components/state/stores/AppStore';
import Header from './Header/Header';

// IMPORT COMPONENTS

import { AppRouter } from './routers/AppRouter';


// COMPONENT

export const App = () => (
    <Provider store={createAppStore()}>
        <Fragment>
            <Header />            
            <div className="container">
                <AppRouter />
            </div>
        </Fragment>
    </Provider>
);
