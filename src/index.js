import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from "react-router";
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'

import history from 'utils/history';
import combineReducers from 'redux/root.js';

import 'index.scss';
import App from 'app/App';

import { Provider } from 'react-redux';

let store = '';

if ( window.location.hostname !== 'localhost' ) {
	store = createStore(combineReducers);
} else {
	store = createStore(
		combineReducers,
		applyMiddleware(logger)
	);
}


ReactDOM.render(
	<Provider store={ store }>
		<Router history={ history }>
			<App />
		</Router>
	</Provider>,

	document.getElementById( 'root' )
);