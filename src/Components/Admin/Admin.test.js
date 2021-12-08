import Admin from "./Admin";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { store } from "../../App";
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
describe("<Admin/>", () => {
	test("render admin login form", async () => {
		render(
			<Provider store={store}>
				<Admin />
			</Provider>
		);
		const loginElement = screen.getByText("Admin Panel");
		const inputElements = await screen.findAllByRole("textbox");
		const loginButton = screen.getByRole("button");
		expect(inputElements).toHaveLength(1);
		expect(loginButton).toBeInTheDocument();
		expect(loginElement).toBeInTheDocument();
	});
});
