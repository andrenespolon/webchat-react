const INITIAL_STATE = {
	sessionTheme: 'dark',
};

function theme(state = INITIAL_STATE, action) {
	if (action.type === 'SET_THEME_SESSION') {
		if (action.theme === 'dark') {
			return { sessionTheme: 'light' };
		} else {
			return { sessionTheme: 'dark' };
		}
	}
	return state;
}

export default theme;
