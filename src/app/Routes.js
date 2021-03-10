import React from 'react';
import { Redirect, Switch, Route } from 'react-router';

// Application Imports //
import HomePage from 'pages/home/home.component';

const Routes = props => (
	<Switch>

	{/* --------- APPLICATION ROUTE SETTINGS --------- */}

		<Route 	path={'/home'	}	component={ HomePage } />

		<Redirect from={'/'} to={'/home'} />

	{/* --------------------------------------------------------------- */}

	</Switch>
);

export default ( Routes );