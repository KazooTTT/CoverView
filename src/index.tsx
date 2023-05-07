import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// @ts-expect-error TS(6142): Module './components/App' was resolved to '/Users/... Remove this comment to see the full error message
import App from './components/App';

ReactDOM.render(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <App />,
    document.querySelector('#root')
);



