import {
    FETCH_HOTELS_PENDING,
    FETCH_HOTELS_FULFILLED,
    FETCH_HOTELS_REJECTED,
    SAVE_PARAMS
} from '../actions/HotelsActions';


// INITIALIZE STATE

const initialState = {
    hotels: [],
    fetching: false,
    fetched: false,
    failed: false,
    name: '',
    stars: ''
};


// REDUCER

export const HotelsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_PARAMS:
            return {
                ...state,
                ...action.payload
            };
        case FETCH_HOTELS_PENDING:
            return {
                ...state,
                hotels: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_HOTELS_FULFILLED:
            return {
                ...state,
                hotels: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_HOTELS_REJECTED:
            return {
                ...state,
                hotels: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};
