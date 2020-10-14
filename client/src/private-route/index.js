import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loading from '../components/loading';

import { isAuthenticated } from '../services/auth';

export default class PrivateRoute extends Route {
	state = {
		isAuthenticated: false,
		isLoading: true,
	};

	componentDidMount = async () => {
		try {
			const auth = await isAuthenticated();
			console.log(auth);
			if (!auth) {
				return this.setState({ isLoading: false });
			}
			return this.setState({ isLoading: false, isAuthenticated: true });
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { isAuthenticated, isLoading } = this.state;

		const { component: Component } = this.props;

		if (isLoading) {
			return <Loading />;
		}

		if (!isAuthenticated) {
			return <Redirect to={{ pathname: '/error' }} />;
		}

		return <Component />;
	}
}
