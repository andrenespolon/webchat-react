import styled from 'styled-components';
import { setTheme } from '../../configs/setTheme';

export const Container = styled.div`
	display: flex;
	padding: 10px 20px;
	color: ${(props) => setTheme(props.theme).Green};

	svg,
	label {
		margin: 5px;
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 50px;
		height: 24px;
	}

	.switch input[type='checkbox'] {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: ${(props) => setTheme(props.theme).Selection};
		-webkit-transition: 0.4s;
		transition: 0.4s;
		display: flex;
		align-items: center;
		svg {
			padding: 1px;
		}
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 16px;
		width: 16px;
		left: 4px;
		bottom: 4px;
		background-color: ${(props) => setTheme(props.theme).Pink};
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: ${(props) => setTheme(props.theme).Selection};
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	.slider.round {
		border-radius: 24px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
`;
