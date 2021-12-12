import AdminPanel from './AdminPanel';
import {render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
 
describe('<AdminPanel/>', () => {
    test('render admin panel menu',async ()=>{
        render(<Router><AdminPanel/></Router>);
        const adminMenuPanelButtons = await screen.findAllByRole('button');
        expect(adminMenuPanelButtons).toHaveLength(4);
    });
});