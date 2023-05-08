import React, { ReactNode, createContext, useState } from "react";

interface UnsplashImageProps {
  url: string;
  name: string;
  avatar: string;
  profile: string;
  downloadLink: string;
}

interface ImgContextProps {
  unsplashImage: UnsplashImageProps;
  setUnsplashImage: (newValue: UnsplashImageProps) => void;
}

const ImgContext = createContext<ImgContextProps>({} as ImgContextProps);

const ImgProvider = ({ children }: { children: ReactNode }) => {
  const [unsplashImage, setUnsplashImage] = useState<UnsplashImageProps>(
    {} as UnsplashImageProps
  );

  return (
    <ImgContext.Provider value={{ unsplashImage, setUnsplashImage }}>
      {children}
    </ImgContext.Provider>
  );
};

export { ImgProvider, ImgContext };
