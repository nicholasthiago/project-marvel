import React from 'react';
import './App.scss';
import Routes from './Routes';

// "start": "PORT=2560 HTTPS=true react-scripts start",

class App extends React.Component {
	state = {};

	render () {
		return (
			<Routes />
		);
	}
};

export default App;