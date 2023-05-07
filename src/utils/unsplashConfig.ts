import { createApi } from 'unsplash-js';

// @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
const key= process.env.REACT_APP_API_ACCESS_KEY
const unsplash = createApi({
    accessKey: key
});

export default unsplash;