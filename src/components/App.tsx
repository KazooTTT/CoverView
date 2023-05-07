import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// @ts-expect-error TS(6142): Module './Editor' was resolved to '/Users/kazoottt... Remove this comment to see the full error message
import Editor from './Editor';
// @ts-expect-error TS(6142): Module './Home' was resolved to '/Users/kazoottt/r... Remove this comment to see the full error message
import Home from './Home'
// @ts-expect-error TS(6142): Module './Faq' was resolved to '/Users/kazoottt/re... Remove this comment to see the full error message
import Faq from './Faq';

const App = () => {

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <BrowserRouter>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Routes>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Route exact path="/" element={<Home />} />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Route exact path="/editor" element={<Editor />} />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Route exact path="/faq" element={<Faq />} />
            </Routes>
        </BrowserRouter>
    );

}

export default App;