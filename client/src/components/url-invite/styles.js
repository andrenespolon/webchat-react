import styled from 'styled-components';
import { setTheme } from '../../configs/setTheme';

export const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 10px 20px;
	width: 100%;
	color: ${(props) => setTheme(props.theme).Green};

	svg {
		padding: 5px;
	}

	label {
		padding: 10px;
		font-size: small;
		font-family: 'Roboto', sans-serif;
	}

	span.input {
		display: flex;
		flex-wrap: nowrap;
		padding: 10px;
		border-radius: 5px;
		width: 80%;
		background: ${(props) => setTheme(props.theme).Selection};

		input {
			border: none;
			outline: none;
			font-family: monospace;
			width: 100%;
			color: ${(props) => setTheme(props.theme).Pink};
			background: ${(props) => setTheme(props.theme).Selection};
		}

		span.copy {
			padding: 5px 10px;
			border-radius: 3px;
			cursor: pointer;
			font-family: 'Roboto', sans-serif;
			font-size: small;
			transition: all ease 0.2s;
			color: ${(props) => setTheme(props.theme).Foreground};
			background: ${(props) => setTheme(props.theme).Background};

			&:hover {
				color: ${(props) => setTheme(props.theme).Selection};
				background: ${(props) => setTheme(props.theme).Green};
			}
		}
	}
`;
