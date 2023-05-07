import React, { useState, useEffect, useContext } from 'react';
import unsplash from "../../utils/unsplashConfig";
// @ts-expect-error TS(6142): Module '../../utils/ImgContext' was resolved to '/... Remove this comment to see the full error message
import { ImgContext } from '../../utils/ImgContext';

const StylishTheme = ({
    config
}: any) => {
    const { title, author, font, icon, customIcon, platform,bgColor } = config;

    // const [image, setImage] = useState({})

    const [imageList, setImageList] = useState([]);
    const [searchText, setSearchText] = useState('dev');

    // @ts-expect-error TS(2339): Property 'unsplashImage' does not exist on type 'u... Remove this comment to see the full error message
    const { unsplashImage, setUnsplashImage } = useContext(ImgContext);

    const searchImages = () => {

        unsplash.search
            .getPhotos({
                query: searchText,
                page: 1,
                // @ts-expect-error TS(2345): Argument of type '{ query: string; page: number; p... Remove this comment to see the full error message
                per_page: 30,
                // orientation:'portrait'


            })
            .then(response => {
                // console.log(response.response.results);
                // @ts-expect-error TS(2532): Object is possibly 'undefined'.
                setImageList(response.response.results)
            });
    }

    useEffect(() => {

        unsplash.search
            .getPhotos({
                query: 'setup',
                page: 1,
                // @ts-expect-error TS(2345): Argument of type '{ query: string; page: number; p... Remove this comment to see the full error message
                per_page: 25

            })
            .then(response => {
                // console.log(response.response.results);
                // @ts-expect-error TS(2532): Object is possibly 'undefined'.
                setImageList(response.response.results)
            });
    }, [])

    const selectImage = (image: any) => {
        setUnsplashImage({
            url: image.urls.regular,
            name: image.user.name,
            avatar: image.user.profile_image.small,
            profile: `${image.user.links.html}?utm_source=https://coverview.vercel.app&utm_medium=referral`,
            downloadLink: image.links.download_location

        })


    }

    const handleSearchSubmit = (e: any) => {
        e.preventDefault();
        // @ts-expect-error TS(2554): Expected 0 arguments, but got 1.
        searchImages(searchText);

    }


    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className=" bg-white rounded">


            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className={` overflow-y-hidden flex flex-col rounded ${platform}`}
            style={{ backgroundColor: bgColor }}
            >

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="flex flex-row  items-center bg-white  justify-center m-4 ">

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="h-full w-1/2  bg-white rounded-l-xl">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className={`${font} px-12 justify-center text-left rounded-xl h-full p-4 flex flex-col`}>
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <h1 className=" text-4xl font-bold text-gray-800">{title}</h1>
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <div className="flex items-center mt-10 text-left">
                                {
                                    customIcon ?
                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                        <div className=" ">
                                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                            <img src={customIcon} alt="img" className="w-12 h-12 mr-2 rounded-full bg-white border border-white" />
                                        </div>
                                        :
                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                        <div className="mr-2 items-center justify-center flex">
                                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                            <i className={`devicon-${icon.value}-plain  dev-icon text-3xl`}></i>
                                        </div>
                                }
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <h2 className="text-xl  font-semibold text-left ">{author}</h2>


                            </div>
                        </div>
                    </div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="w-1/2">


                        {unsplashImage ?
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <div className='relative flex group'>

                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <div className="h-96 w-96 ">
                                    
                              
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <img src={unsplashImage.url && unsplashImage.url} className=" object-cover h-96 w-96  " alt="preview" />
 </div>
                               
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <button
                                    onClick={() => setUnsplashImage('')}
                                    className="absolute  top-4 right-2 cursor-pointer">
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <svg className="group-hover:inline-block hidden w-6 h-6 text-gray-800 bg-white p-1 rounded-full z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>

                                </button>

                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <div className="absolute  bottom-4 right-4 opacity-80">
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <div className=" group-hover:flex hidden items-center">
                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                        <span className="text-sm text-white mx-2">Photo by</span>
                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                        <a href={unsplashImage.profile} target="_blank" rel="noreferrer" className="cursor-pointer flex items-center bg-gray-300 rounded-full text-sm">
                                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                            <img src={unsplashImage.avatar && unsplashImage.avatar} alt={unsplashImage.name} className="h-6 w-6 rounded-full mr-2" />

                                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                            <span className="pr-2">{unsplashImage.name}</span>
                                        </a>

                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                        <a href="https://unsplash.com/?utm_source=https://coverview.vercel.app&utm_medium=referral" className="text-sm text-white mx-2">Unsplash</a>
                                    </div>

                                </div>
                            </div>
                            :
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <div className="flex flex-col p-2  bg-white items-center justify-center">

                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <form onSubmit={(e) => handleSearchSubmit(e)} className="flex bg-gray-50 rounded-full border mb-2">
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <input type="text"
                                        value={searchText}
                                        placeholder="Search image"
                                        className="focus:outline-none w-max text-lg bg-gray-50  p-1 px-4  rounded-full border border-gray-50"
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />

                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <button type="submit" onClick={() => searchImages(searchText)}>
                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                        <svg className="w-9 h-9 p-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </button>
                                </form>


                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <div className="overflow-y-scroll overflow-x-hidden h-80">
                                    {
                                        imageList.map(image => {
                                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                            return <img src={image.urls.regular}
                                                // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
                                                key={image.id}
                                                // @ts-expect-error TS(2339): Property 'alt_description' does not exist on type ... Remove this comment to see the full error message
                                                alt={image.alt_description}
                                                className="rounded m-2 cursor-pointer"
                                                onClick={() => selectImage(image)
                                                }
                                            />
                                        })
                                    }
                                </div>
                            </div>

                        }

                    </div>
                </div>


            </div>

        </div>
    );
}

export default StylishTheme;