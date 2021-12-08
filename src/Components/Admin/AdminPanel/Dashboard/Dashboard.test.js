import Dashboard from './Dashboard';
import { render } from '@testing-library/react';

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
describe('<Dashboard/>',()=>{

    test('render dashboard',()=>{
        render(<Dashboard />);
    });
});