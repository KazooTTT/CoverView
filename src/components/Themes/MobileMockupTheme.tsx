import React, { useState } from 'react';

const MobileMockupTheme = ({
    config
}: any) => {
    const { bgColor, platform, title,font } = config;

    const [image, setImage] = useState()

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="p-4 bg-white">


            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className={`overflow-y-hidden flex flex-row px-10 items-center justify-center rounded px-8 pt-4  ${platform}`}
                style={{ backgroundColor: bgColor }}
            >


                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <h1 className={`${font} text-2xl w-1/2 md:text-4xl px-4 text-white font-bold text-left`}>{title}</h1>

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="w-5/12 mx-auto m-4 mt-10 group mx-auto h-full  shadow-lg  flex flex-col  bg-white border-t-8 border-x-8 border-gray-800 rounded-t-3xl border-white">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="bg-gray-800 h-8 w-full p-2 pb-3 flex items-center rounded-t">

                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="flex mx-auto items-center">

                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <div className="bg-white h-3 w-3 rounded-full mx-1"></div>
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <div className="bg-white h-2 w-20 rounded-full mx-1"></div>

                        </div>


                    </div>



                    {image ?
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="group relative">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <img src={image && image} className="object-cover rounded -translate-y-1 h-full" alt="preview" />
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <button
                                // @ts-expect-error TS(2345): Argument of type '""' is not assignable to paramet... Remove this comment to see the full error message
                                onClick={() => setImage('')}
                                className="ml-auto mr-4 cursor-pointer">
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <svg className="group-hover:inline-block absolute top-4 right-2  bg-gray-500 hidden w-8 h-8 p-2 text-white rounded-full z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>

                            </button>
                        </div>
                        :
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="flex flex-col px-4 rounded-xl py-20 bg-white items-center justify-center">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <input type="file"
                                className="text-sm  flex flex-col cursor-pointer mb-2 bg-white rounded border"
                                // @ts-expect-error TS(2345): Argument of type 'string' is not assignable to par... Remove this comment to see the full error message
                                onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                            />
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <span className=" text-center italic">click to upload a screenshot</span>
                        </div>

                    }
                </div>





            </div>


        </div>
    );
}

export default MobileMockupTheme;