import React from 'react';
import { render, screen } from '@testing-library/react';
import AllOrdersPage from './AllOrdersPage';

describe(AllOrdersPage.name,() => {
    test('should match snapshot for AllOrdersPage component',()=>{
        const { container } = render(<AllOrdersPage/>);
        expect(container).toMatchSnapshot();     
    })

})