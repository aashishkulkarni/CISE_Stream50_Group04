
import { cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import SubmissionForm from '../components/SubmissionForm';
import { render } from '@testing-library/react';


afterEach(cleanup);

it('axios request works', async () => {
    const url = 'http://localhost:8080/article/submitArticle'
    render(<SubmissionForm url={url} />);
})