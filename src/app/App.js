import React from 'react';
import './App.scss';
import Routes from './Routes';

import { connect } from 'react-redux';

import { SetData } from 'redux/marvel/marvel.actions';

import { requestDefault } from 'utils/functions/request.js';
import LoadingScreen from 'components/essentials/loading/loading.component';

// "start": "PORT=2560 HTTPS=true react-scripts start",
class App extends React.Component {
	state = { data:[], loaded:false };

    async componentDidMount (data) {

		data = await requestDefault('characters',10);

		console.log( data );

		await this.props.SetData( data );
		return this.setState({ data, loaded:true });
    };

	render () {

		let { loaded } = this.state;

		return ( loaded ) ? ( <Routes /> ) : ( <LoadingScreen /> )
	}
};

const mapDispatchToProps = dispatch => ({
	SetData : data => dispatch(SetData(data)),
});

export default connect(
	null,
	mapDispatchToProps,
)( App );