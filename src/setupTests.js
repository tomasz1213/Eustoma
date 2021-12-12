// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
jest.mock("firebase", () => {
	return {
		initializeApp: jest.fn(),
		analytics: jest.fn(),
		storage: () => {
			return { ref: jest.fn() };
		},
		database: jest.fn(),
		auth: jest.fn(),
	};
});
jest.mock("animejs/lib/anime.es.js", () => {
	return { anime: jest.fn() };
});
