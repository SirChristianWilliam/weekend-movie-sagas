import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const activeMovie = (state={}, action) => {
    console.log('active movie payload:', action.payload);
    //set state of active book
    switch(action.type){
        case 'SET_ACTIVE_BOOK':
            return action.payload;
    }
    return state;
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}



function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
};

function* fetchSingleMovie(action){
    console.log('in fetchSingleMovie with id of:', action.payload);

    //get single move and assign to response variable
    const response = yield axios.get(`/api/movie/${action.payload}`);

    console.log('response from server is:', response);

    //'yield put' to activeMovie
    yield put({
        type: 'SET_ACTIVE_BOOK',
        payload: response.data
    });

}

// Create the rootSaga generator function
function* rootSaga() {
    //get all movies for render
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);

    //get single movie information
    yield takeEvery('FETCH_SINGLE_MOVIE', fetchSingleMovie);
    
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        activeMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
