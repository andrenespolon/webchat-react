import colors from './themes';

export const setTheme = (theme) => {
	switch (theme) {
		case 'dark':
			return colors.themes.dark;

		case 'light':
			return colors.themes.light;

		default:
			return colors.themes.dark;
	}
};
