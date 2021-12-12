import Admin from "./Admin";
import { render, screen } from "../../test-utils";

describe("<Admin/>", () => {
	test("render admin login form", async () => {
		render(<Admin />);
		const loginElement = screen.getByText("Admin Panel");
		const inputElements = await screen.findAllByRole("textbox");
		const loginButton = screen.getByRole("button");
		expect(inputElements).toHaveLength(1);
		expect(loginButton).toBeInTheDocument();
		expect(loginElement).toBeInTheDocument();
	});
});
