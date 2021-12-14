import React from "react";
import Dashboard from "./Dashboard";
import { render, act, screen, cleanup } from "@testing-library/react";
import mockAxios from "jest-mock-axios";
afterEach(() => {
	mockAxios.reset();
});
describe("<Dashboard/>", () => {
    afterEach(cleanup);
	test("render dashboard", async () => {
		await mockAxios.get.mockResolvedValue({
			data: { 123: { name: "" } },
		});

		await act(async () => {
			render(<Dashboard />);
		});
		const element = await screen.getByTestId("test-resolved");
		expect(element).toBeInTheDocument();
	});
});
