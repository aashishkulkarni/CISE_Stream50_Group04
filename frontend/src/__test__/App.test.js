import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import SubmitArticle from '../pages/Submit-Article';
import { cleanup } from "@testing-library/react";
afterEach(cleanup);
it('renders App without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
it('renders SubmitArticle without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SubmitArticle />, div);
    ReactDOM.unmountComponentAtNode(div);
});

// it('button click displays results', () => {
//     const { getByText } = render(<SubmitArticle><SubmissionForm /></SubmitArticle>)
//     expect(getByText(/'results'/i).textContent).toBe("results")

//     fireEvent.click(getByText(""))

// })

 

// describe('Addition', () => {
//     it('knows that 2 and 2 make 4', () => {
//         expect(2 + 2).toBe(4);
//     });
// });
