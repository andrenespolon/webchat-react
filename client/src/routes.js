import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './private-route';
import Login from './pages/login';
import Room from './pages/room';
import NotFound from './pages/not-found';

import { connect } from 'react-redux';

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Login} />
				<PrivateRoute exact path="/room/:idRoom" component={Room} />
				<Route exact path="/*" component={NotFound} />
			</Switch>
		);
	}
}

export default connect((state) => ({ theme: state.sessionTheme }))(Routes);
