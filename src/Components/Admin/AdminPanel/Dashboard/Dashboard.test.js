import React from 'react';
import Dashboard from './Dashboard';
import { render,act } from '@testing-library/react';
import mockAxios from "jest-mock-axios";
afterEach(() => {
    mockAxios.reset();
  });
describe('<Dashboard/>',()=>{
    test('render dashboard',async()=>{
        await act(async () => {
			await mockAxios.get.mockResolvedValue({
				data: { 123: { name: "" } },
			});
            
            render(<Dashboard />);
        });
    });
});