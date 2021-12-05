import Admin from './Admin';
import {render, screen } from '@testing-library/react';

jest.mock('firebase', () => {
    return { initializeApp: jest.fn(),
         analytics: jest.fn(),
        storage: ()=>{ return {ref:jest.fn()}},
        database:jest.fn(),
        auth:jest.fn()};
});  
jest.mock('react-redux',()=>{
    return{
        useSelector:()=>false,
        useDispatch:jest.fn()
    };
});
describe('<Admin/>', () => {
    test('render admin login form',async ()=>{
        render(<Admin/>);
        const loginElement = screen.getByText('Admin Panel');
        const inputElements = await screen.findAllByRole('textbox');
        const loginButton = screen.getByRole('button');
        expect(inputElements).toHaveLength(1);
        expect(loginButton).toBeInTheDocument();
        expect(loginElement).toBeInTheDocument();
    });
}); 