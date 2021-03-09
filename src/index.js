import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router";

import reducer from 'redux/root.js';

import 'index.scss';
import App from 'app/App';

import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ history }>
			<App />
		</Router>
	</Provider>,

	document.getElementById( 'root' )
);