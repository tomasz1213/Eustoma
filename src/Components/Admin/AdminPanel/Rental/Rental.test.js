import React from "react";
import Rental from "./Rental";
import { render, act, screen, cleanup } from "../../../../test-utils";

import mockAxios from "jest-mock-axios";
afterEach(() => {
	mockAxios.reset();
});
describe("<Rental/>", () => {
    afterEach(cleanup);
    test("render component without data",async ()=>{
        mockAxios.get.mockResolvedValue({
			data: { 123: { name: "TEST-NAME" } },
		});
        await act(async () => {
			const {getByTestId} = render(<Rental />);
            expect(getByTestId("Loading-spinner")).toBeInTheDocument();
		});
    });
	test("render component with fetched data", async () => {
		await mockAxios.get.mockResolvedValue({
			data: { 123: { name: "TEST-NAME" } },
		});

		await act(async () => {
			render(<Rental />);
		});
		const element = await screen.getByTestId("test-Rental");
        const elementWithName = await screen.findAllByText("TEST-NAME");
		expect(element).toBeInTheDocument();
		expect(elementWithName[0]).toBeInTheDocument();
	});
});
