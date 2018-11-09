import axios from 'axios'

const apiKey = 'fXq2eAsf10nwO3TvdqKlVpfuwF3v6VtA1WPul6Ni-G4cw7XHi49bDqqCjDMLNg2Vs8WDvgih9PSOn19V9q9CFQunpmgAEf8bybXQyoXlRC0fLxBaUyIXGGQWfQPdW3Yx';
const yelpUrl = 'https://api.yelp.com/v3/businesses/search';
const cors = 'https://cors-anywhere.herokuapp.com/';
const ROOT_URL = cors + yelpUrl;

export const FETCH_DATA = "FETCH_DATA";

export function fetchData(input) {
    return {
        type: FETCH_DATA,
        payload: axios.get(ROOT_URL, {
            headers: {
                Authorization:'Bearer ' + apiKey
            },
            params: {
                term: input,
                location: '92139'
            } 
        })
    }
}

