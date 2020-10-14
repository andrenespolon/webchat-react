import React from 'react';
import { Container, Spinner } from './styles';

import { connect } from 'react-redux';

class Loading extends React.Component {
	render() {
		const { theme } = this.props;
		return (
			<Container theme={theme}>
				<Spinner type="TailSpin" />
			</Container>
		);
	}
}

export default connect((state) => ({ theme: state.sessionTheme }))(Loading);
