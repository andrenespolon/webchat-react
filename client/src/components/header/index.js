import React from 'react';
import UrlInvite from '../url-invite';
import Switch from '../switch';

import { Container } from './styles';

import { connect } from 'react-redux';

function Header({ theme }) {
	return (
		<Container theme={theme}>
			<UrlInvite />
			<Switch />
		</Container>
	);
}

export default connect((state) => ({ theme: state.theme.sessionTheme }))(
	Header
);
