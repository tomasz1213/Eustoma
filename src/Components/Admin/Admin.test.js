import Admin from './Admin';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Admin/>', () => {
    test('render admin login element',()=>{
        render(<Admin/>);
        const loginElement = screen.getByText('Admin Panel',  {exact:false});
        expect(loginElement).toBeInTheDocument();
    });
});