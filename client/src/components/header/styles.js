import styled from 'styled-components';
import { setTheme } from '../../configs/setTheme';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-direction: row;
	border-radius: 10px;
	box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.2);
	background: ${(props) => setTheme(props.theme).Subground};
`;
