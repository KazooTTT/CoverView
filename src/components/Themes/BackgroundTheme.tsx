import React, { useState, useEffect, useContext } from 'react';
import unsplash from "../../utils/unsplashConfig";
// @ts-expect-error TS(6142): Module '../../utils/ImgContext' was resolved to '/... Remove this comment to see the full error message
import { ImgContext } from '../../utils/ImgContext';

const BackgroundTheme = ({
    config
}: any) => {
    const { title, author, font, icon, customIcon, platform, bgColor } = config;

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
                per_page: 30

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
                <div className="flex flex-row  items-center bg-white  justify-center  ">


                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="w-full">


                        {unsplashImage ?
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <div className='relative flex group'>

                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <div className="h-max w-full ">
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <img src={unsplashImage.url && unsplashImage.url} className=" object-cover h-full w-full  " alt="preview" />
                                </div>


                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <div className=" backdrop-blur-sm h-full bg-gray-800/60 absolute top-0 right-0 left-0 ">
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <button
                                        onClick={() => setUnsplashImage('')}
                                        className="absolute  top-2 right-2 cursor-pointer">
                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                        <svg className="group-hover:inline-block hidden w-8 h-8 text-gray-800 bg-white p-2 rounded-full z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>

                                    </button>

                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <div className={`${font} px-10 pt-32  text-left rounded-xl h-full p-4 flex flex-col`}>
                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                        <h1 className=" md:text-5xl text-center text-2xl font-bold text-white">{title}</h1>
                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                        <div className="flex flex-col items-center py-10  ">

                                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                            <h2 className="text-xl  font-semibold text-left text-white ">{author}</h2>
                                            {
                                                customIcon ?
                                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                                    <div className=" ">
                                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                                        <img src={customIcon} alt="img" className="w-12 h-12 m-2 rounded-full bg-white border-2 border-white" />
                                                    </div>
                                                    :
                                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                                    <div className="mr-2 items-center justify-center flex">
                                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                                        <i className={`devicon-${icon.value}-plain text-white dev-icon text-3xl`}></i>
                                                    </div>
                                            }

                                        </div>
                                    </div>
                                </div>

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
                                <div className="flex items-center w-full px-6 ">
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <div className="text-lg font-semibold text-gray-700">Click on any image to select</div>
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <form onSubmit={(e) => handleSearchSubmit(e)} className=" ml-auto mr-2 w-1/2 flex bg-gray-50 rounded-full border mb-2">
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <input type="text"
                                        value={searchText}
                                        placeholder="Search image"
                                        className="focus:outline-none w-full text-lg bg-gray-50  p-1 px-4  rounded-full border border-gray-50"
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />

                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <button type="submit" onClick={() => searchImages(searchText)}>
                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                        <svg className="w-9 h-9 ml-auto mr-1 p-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </button>
                                </form>

                                    </div>


                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <div className="overflow-y-scroll overflow-x-hidden h-96 justify-center flex flex-wrap">
                                    {
                                        imageList.map(image => {
                                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                            return <img src={image.urls.regular}
                                                // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
                                                key={image.id}
                                                // @ts-expect-error TS(2339): Property 'alt_description' does not exist on type ... Remove this comment to see the full error message
                                                alt={image.alt_description}
                                                className="rounded m-2 cursor-pointer w-5/12 object-cover h-40"
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

export default BackgroundTheme;