import ShoppingCart from "./ShoppingCart";
import { Provider } from "react-redux";
import { store } from "../../../App";
import { render, screen } from "@testing-library/react";

describe("<Admin/>", () => {
	test("render admin login form", async () => {
		render(
			<Provider store={store}>
				<ShoppingCart />
			</Provider>
		);
	});
});
