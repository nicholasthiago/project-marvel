import React from 'react';
import './home.styles.scss';

import { connect } from 'react-redux';

import Div from 'components/essentials/div/div.component';						// eslint-disable-line
import Input from 'components/essentials/inputs/input.component';				// eslint-disable-line
import Image from 'components/essentials/images/image.component';				// eslint-disable-line
import Button from 'components/essentials/buttons/button.component';			// eslint-disable-line
import LoadingScreen from 'components/essentials/loading/loading.component';	// eslint-disable-line

class HomePage extends React.Component {

	state = { data:[], loaded:false };

	render_Characters (data) {
		return Object.values( data ).map( (c,i) => {
			return (
				<Button className={'char-list-item'} key={i} onMouseDown={() => console.log(c.id) }>
					<Image src={ `${c.thumbnail.path}/standard_xlarge.jpg` } />
					<h2> { c.name } </h2>
				</Button>
			);
		})
	};

	async componentDidMount () {
		await this.setState({ data:this.props.data, loaded:true });
	};

	render_Home (data) {
		return (
			<section className={'section-home'}>
				{ this.render_Characters(data) }
			</section>
		);
	};

	render () {
		let { loaded } = this.state;

		return ( loaded ) ? ( this.render_Home(this.props.data) ) : ( <LoadingScreen /> ) ;
	};
};

const mapStateToProps = state => ({
	data : state.marvel.data_get,
});

export default connect(
	mapStateToProps,
)( HomePage );