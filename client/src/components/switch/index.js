import React from 'react';
import { Container } from './styles';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

import { connect } from 'react-redux';
import { setThemeSession } from '../../store/actions';

class Switch extends React.Component {
	render() {
		const { theme, dispatch } = this.props;
		return (
			<Container theme={theme}>
				<label className="switch">
					<input
						type="checkbox"
						onChange={() => dispatch(setThemeSession(theme))}
					/>
					<span className="slider round">
						<RiSunFill />
						<RiMoonClearFill />
					</span>
				</label>
			</Container>
		);
	}
}

export default connect((state) => {
	console.log(state);
	return { theme: state.theme.sessionTheme };
})(Switch);
