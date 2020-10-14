import styled from 'styled-components';
import { setTheme } from '../../configs/setTheme';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: minmax(250px, 400px) auto;
	background: ${(props) => setTheme(props.theme).Variant};
`;
