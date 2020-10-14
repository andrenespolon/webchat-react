import React from 'react';
import Header from '../header';
import MsgArea from '../msg-area';
// import MsgText from '../msg-text';

import { Container } from './styles';

import { connect } from 'react-redux';

function MsgContainer({ theme }) {
	return (
		<Container theme={theme}>
			<Header />
			<MsgArea />
			{/* <MsgText /> */}
		</Container>
	);
}

export default connect((state) => ({ theme: state.theme.sessionTheme }))(
	MsgContainer
);
