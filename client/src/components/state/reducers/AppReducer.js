// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { HotelsReducer } from '../reducers/HotelsReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    hotels: HotelsReducer
});
