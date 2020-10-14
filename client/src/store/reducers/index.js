import { combineReducers } from 'redux';

import theme from './theme';
import user from './user';
import room from './room';
// others imports

export default combineReducers({
	theme,
	user,
	room,
});
