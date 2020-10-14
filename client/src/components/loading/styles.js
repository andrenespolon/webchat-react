import styled from 'styled-components';
import { setTheme } from '../../configs/setTheme';
import Loader from 'react-loader-spinner';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${(props) => setTheme(props.theme).Variant};
`;

export const Spinner = styled(Loader)`
	svg {
		path {
			stroke: ${(props) => setTheme(props.theme).Purple};
		}
		circle {
			fill: ${(props) => setTheme(props.theme).Purple};
		}
	}
`;
