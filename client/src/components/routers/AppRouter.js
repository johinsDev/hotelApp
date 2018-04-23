// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import HomePage from '../pages/Hotels/Home';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);
