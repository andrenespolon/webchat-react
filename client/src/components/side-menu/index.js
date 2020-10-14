import React from 'react';
import { Container } from './styles';
import Contact from '../contact';

import { connect } from 'react-redux';

class SideMenu extends React.Component {
	state = {
		people: [
			{
				name: 'André Nespolon',
				nickName: 'the_pilot',
				image: 'the_pilot',
				status: 'Go to the sky 🚀',
			},
			{
				name: 'John Doe',
				nickName: 'unknow',
				image: 'unknow',
				status: 'Power! Unlimited power!🤖',
			},
			{
				name: 'Darth Vader',
				nickName: 'lord',
				image: 'lord',
				status: 'From my point of view, the Jedi are evil.',
			},
			{
				name: 'Kilo Ren',
				nickName: 'kilo',
				image: 'kilo',
				status: 'I feel it again. The pull to the light.',
			},
		],
	};

	render() {
		const { people } = this.state;
		const { theme } = this.props;
		return (
			<Container theme={theme}>
				{people.map((ele, idx) => (
					<Contact
						key={idx}
						name={ele.name}
						nickName={ele.nickName}
						img={ele.image}
						status={ele.status}
					/>
				))}
			</Container>
		);
	}
}

export default connect((state) => ({ theme: state.theme.sessionTheme }))(
	SideMenu
);
