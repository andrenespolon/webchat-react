import React from 'react';
import { Container, Card } from './styles';
import { RiArrowDownSLine } from 'react-icons/ri';

import { connect } from 'react-redux';

const imgHash = process.env.REACT_APP_IMG_HASH_ROBOHASH;

class Contact extends React.Component {
	state = {
		openMenu: false,
	};

	handleOpenMenu = () => {
		this.setState((state) => {
			return { openMenu: !state.openMenu };
		});
	};

	render() {
		const { openMenu } = this.state;
		const { theme, name, nickName, img, status } = this.props;
		return (
			<Container
				theme={theme}
				toggle={openMenu}
				onClick={this.handleOpenMenu}
				onBlur={this.handleOpenMenu}>
				<RiArrowDownSLine size={25} />
				<div className="menu">
					<span>mencionar</span>
					<span>banir</span>
				</div>
				<img src={imgHash + img} alt={img} />
				<Card theme={theme}>
					<div className="name">{name}</div>
					<span className="status">{status}</span>
					<small className="nick">{nickName}</small>
				</Card>
			</Container>
		);
	}
}

// const Contact = ({ theme, name, nickName, img, status }) => (
// 	<Container theme={theme}>
// 		<div className="menu">
// 			<span>mencionar</span>
// 			<span>banir</span>
// 		</div>
// 		<img src={imgHash + img} alt={img} />
// 		<Card theme={theme}>
// 			<div className="name">{name}</div>
// 			<span className="status">{status}</span>
// 			<small className="nick">{nickName}</small>
// 		</Card>
// 	</Container>
// );

export default connect((state) => ({ theme: state.theme.sessionTheme }))(
	Contact
);
