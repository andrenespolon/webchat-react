// fake async await
export const isAuthenticated = async () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 2000);
	});
};
