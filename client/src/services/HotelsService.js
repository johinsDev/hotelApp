// IMPORT DATA FROM STATIC JSON FILE

const DEFAULT_HEADERS = { Accept: 'application/json', 'Content-Type': 'application/json'};
const API_URL = 'http://localhost:3000/api/hotels';

const Http = (options = {}, headers = DEFAULT_HEADERS) => {
    const { url, method } = options;
    const requestOptions = {
        method,
        headers
    };

    return fetch(url, requestOptions);
};
// COMPONENT

export const fetchHotels = ({ name, stars }) => {
    const newUrl = new URL(API_URL);
    const params = { name, stars };
    Object.keys(params).forEach(key => {
        if(params[key]) {
            newUrl.searchParams.append(key, params[key]);
        }
    });
    return Http({ url: newUrl, method: 'GET' })
        .then((response) => {
            return response.json();
        });
};
