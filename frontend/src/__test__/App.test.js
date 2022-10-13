import { Button, Experimental_CssVarsProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from '../App';
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders buttons correctly', () => {
    const { getByTestId } = render(<Router label="save" />);
    expect(getByTestId("button")).toBeTruthy();
});

// describe('Routing', () => {
//     it('renders buttons correctly', () => {
//         const { getByTestId } = render(<Router label="save" />);
//         expect(getByTestId("button")).toBeTruthy();
//     });
// });

// describe('Addition', () => {
//     it('knows that 2 and 2 make 4', () => {
//         expect(2 + 2).toBe(4);
//     });
// });
