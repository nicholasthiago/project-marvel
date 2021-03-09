import React from 'react';
import { Redirect, Switch, Route } from 'react-router';

// Application Imports //
import HomePage from 'pages/home/home.component';

export default props => (
	<Switch>

	{/* --------- APPLICATION ROUTE SETTINGS --------- */}

		{/* --------- Home Page --------------------------------------- */}

		<Route 	path={'/home'	}	component={ HomePage } />

		<Redirect from={'/'} to={'/home'} />

	{/* --------------------------------------------------------------- */}

	</Switch>
);