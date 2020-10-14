import React from 'react';

// import Switch from '../../components/switch';
import GridView from '../../components/grid-view';

// import { connect } from 'react-redux';

export default class Room extends React.Component {
	render() {
		// const { theme } = this.props;
		return (
			<>
				<GridView />
			</>
		);
	}
}

// export default connect((state) => ({ theme: state.theme.sessionTheme }))(Room);
