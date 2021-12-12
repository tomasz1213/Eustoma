import React from "react";
import RentalMain from "./RentalMain";
import { computeFreshDate } from "./RentalMain";
import { render, screen,act } from "../../test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import mockAxios from "jest-mock-axios";
afterEach(() => {
	mockAxios.reset();
});
describe("<RentalMain/>", () => {
	test("should retun false if date diffrence > 30", () => {
		const countingDays = computeFreshDate("2021-11-08");
		expect(countingDays).toBe(false);
	});
	test("render RentaMain component", async () => {
		await act(async () => {
			mockAxios.get.mockResolvedValue({
				data: { 123: { name: "34" } },
			});
			render(
				<Router>
					<RentalMain />
				</Router>
			);
			const headerElement = screen.getByText("WSZYSTKIE PRODUKTY");
			expect(headerElement).toBeInTheDocument();
		});
	});
});
