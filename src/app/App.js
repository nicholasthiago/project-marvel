import React from 'react';
import './App.scss';
import Routes from './Routes';

import { connect } from 'react-redux';

import { SetData } from 'redux/marvel/marvel.actions';

// "start": "PORT=2560 HTTPS=true react-scripts start",
class App extends React.Component {
	state = { data:[] };

    async componentDidMount (data) {

		let key = '25a3bb2f8afc30942f44388024a33246';
		let hash = 'ffd275c5130566a2916217b101f26150';
		let base = 'https://gateway.marvel.com:443/v1/public/';

		let url = `${base}characters?orderBy=modified&limit=24&apikey=${key}&hash=${hash}`;

		await fetch(url)
			.then( response => response.json() )
			.then( response => data = response.data.results )
			.catch( error => console.error(error.message) )

		await this.props.SetData( data );
		return this.setState({ data });
    };

	render () {
		return ( <Routes /> );
	}
};

const mapDispatchToProps = dispatch => ({
	SetData : data => dispatch(SetData(data)),
});

export default connect(
	null,
	mapDispatchToProps,
)( App );