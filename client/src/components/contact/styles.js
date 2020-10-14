import styled from 'styled-components';
import { setTheme } from '../../configs/setTheme';

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	/* padding: 10px; */
	height: 80px;
	margin: 15px 20px 15px 20px;
	border-radius: 50px 10px 10px 50px;
	background: ${(props) => setTheme(props.theme).Selection};
	box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.2);
	transition: all ease 0.2s;
	cursor: pointer;

	svg {
		position: absolute;
		opacity: 0;
		top: 10px;
		right: 10px;
		color: ${(props) => setTheme(props.theme).Green};
		transition: all ease 0.2s;
		/* border-radius: 5px; */

		/* &:hover {
			background: ${(props) => setTheme(props.theme).Background};
		} */
	}

	div.menu {
		z-index: 10;
		display: flex;
		flex-direction: column;
		position: absolute;
		opacity: ${(props) => (props.toggle ? '1;' : '0;')};
		/* opacity: 0; */
		padding: 10px;
		top: 30px;
		right: 10px;
		border-radius: 10px;
		box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.2);
		color: ${(props) => setTheme(props.theme).Green};
		background: ${(props) => setTheme(props.theme).Background};
		font-family: 'Roboto', sans-serif;
		font-size: small;
		transition: all ease 0.2s;

		span {
			padding: 3px;
			border-radius: 4px;
			transition: all ease 0.2s;

			&:hover {
				color: ${(props) => setTheme(props.theme).Background};
				background: ${(props) => setTheme(props.theme).Green};
			}
		}
	}

	img {
		width: 80px;
		height: 80px;
		border-radius: 40px;
		background: ${(props) => setTheme(props.theme).Pink};
		box-shadow: inset 1px 10px 20px 1px rgba(0, 125, 255, 0.2);
		transition: all ease 0.2s;
	}
	&:hover {
		transform: translateX(5px);

		&& div.menu {
			/* opacity: 1; */
		}
		&& img {
			transform: scale(1.1);
		}
		&& svg {
			opacity: 1;
		}
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	font-family: 'Roboto', sans-serif;

	div.name {
		color: ${(props) => setTheme(props.theme).Green};
		font-size: 14px;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 2px;
	}
	span.status {
		color: ${(props) => setTheme(props.theme).Foreground};
		font-size: 12px;
		/* font-style: italic; */
	}
	small.nick {
		color: ${(props) => setTheme(props.theme).Pink};
		font-family: 'Fira Code', monospace;
		font-size: 13px;
	}
`;
