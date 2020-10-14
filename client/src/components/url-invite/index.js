import React from 'react';

import { Container } from './styles';

import { connect } from 'react-redux';

class UrlInvite extends React.Component {
	state = {
		urlShare: '',
		label: 'copy',
	};

	componentDidMount = () => {
		const { url } = this.props;
		this.setState({ urlShare: `http://www.webchat-react/room/${url}` });
	};

	onClickToCopy = () => {
		const { urlShare } = this.state;
		navigator.clipboard.writeText(urlShare);
		this.setState({ label: 'copied' });

		setTimeout(() => {
			this.setState({ label: 'copy' });
		}, 5000);
	};

	render() {
		const { theme } = this.props;
		const { label, urlShare } = this.state;
		return (
			<Container theme={theme}>
				<label htmlFor="">Share the link to invite:</label>
				<span className="input">
					<input type="text" readOnly value={urlShare}></input>
					<span onClick={this.onClickToCopy} className="copy">
						{label}
					</span>
				</span>
			</Container>
		);
	}
}

export default connect((state) => ({
	theme: state.theme.sessionTheme,
	url: state.room.id,
}))(UrlInvite);
