import React, { createContext, useState } from "react";
// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
const ImgContext = createContext();

const ImgProvider = ({
  children
}: any) => {
  const [unsplashImage, setUnsplashImage] = useState();
    
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ImgContext.Provider value={{ unsplashImage, setUnsplashImage }}>
      {children}
    </ImgContext.Provider>
  );
};

export {ImgProvider, ImgContext}