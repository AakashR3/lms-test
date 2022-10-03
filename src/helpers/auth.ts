export const login = (sessionId: string) => {
	localStorage.setItem("isLoggedIn", "true");
	localStorage.setItem("sessionId", sessionId);
};
