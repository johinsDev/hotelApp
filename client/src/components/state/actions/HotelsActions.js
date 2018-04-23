import { fetchHotels } from '../../../services/HotelsService';

// FETCH ZIPCODES ACTION NAMES

export const FETCH_HOTELS = 'FETCH_HOTELS';
export const SAVE_PARAMS = 'SAVE_PARAMS';
export const FETCH_HOTELS_PENDING = 'FETCH_HOTELS_PENDING';
export const FETCH_HOTELS_FULFILLED = 'FETCH_HOTELS_FULFILLED';
export const FETCH_HOTELS_REJECTED = 'FETCH_HOTELS_REJECTED';


// ACTION GENERATORS

const fetchHotelsAction = ({ name, stars } = {}) => ({
    type: FETCH_HOTELS,
    payload: fetchHotels({ name, stars })
});

const saveParams = params => ({
    type: SAVE_PARAMS,
    payload: { ...params }
});


// EXPORT ACTIONS

export { fetchHotelsAction  as fetchHotels, saveParams };
