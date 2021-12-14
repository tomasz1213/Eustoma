import React from "react";
import OurWork from "./OurWork";
import { render, act, screen, cleanup } from "@testing-library/react";
import mockAxios from "jest-mock-axios";
afterEach(() => {
	mockAxios.reset();
});
describe("<OurWork/>", () => {
    afterEach(cleanup);
    test("render component without data",async ()=>{
        mockAxios.get.mockResolvedValue({
			data: { 123: { name: "TEST-NAME" } },
		});
        await act(async () => {
			const {getByTestId} = render(<OurWork />);
            expect(getByTestId("Loading-spinner")).toBeInTheDocument();
		});
    });
	test("render component with fetched data", async () => {
		await mockAxios.get.mockResolvedValue({
			data: { 123: { name: "TEST-NAME" } },
		});

		await act(async () => {
			render(<OurWork />);
		});
		const element = await screen.getByTestId("test-OurWork");
        const elementWithName = await screen.findByText("TEST-NAME");
		expect(element).toBeInTheDocument();
		expect(elementWithName).toBeInTheDocument();
	});
});
