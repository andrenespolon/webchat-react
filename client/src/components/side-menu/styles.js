import styled from 'styled-components';
import { setTheme } from '../../configs/setTheme';

export const Container = styled.div`
	margin: 10px;
	overflow-y: scroll;
	overflow-x: hidden;
	background: ${(props) => setTheme(props.theme).Subground};
	box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.2);
	border-radius: 10px;

	&::-webkit-scrollbar {
		width: 5px;
	}
	&::-webkit-scrollbar-thumb {
		height: 10px;
		background-clip: padding-box;
		margin: 2px;
		background: ${(props) => setTheme(props.theme).VariantColor};
	}
`;
