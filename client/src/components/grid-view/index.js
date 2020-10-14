import React from 'react';

import SideMenu from '../side-menu';
import MsgContainer from '../msg-container';

import { Container } from './styles';

import { connect } from 'react-redux';

function GridView({ theme }) {
	return (
		<Container theme={theme}>
			<SideMenu />
			<MsgContainer />
		</Container>
	);
}

export default connect((state) => ({ theme: state.theme.sessionTheme }))(
	GridView
);
