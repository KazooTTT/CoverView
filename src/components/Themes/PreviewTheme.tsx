import React, { useState } from 'react';

const PreviewTheme = ({
    config
}: any) => {
    const { bgColor, platform, title, font } = config;

    const [image, setImage] = useState()

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="p-4 bg-white">


            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className={`overflow-y-hidden flex flex-col rounded px-4 pt-4 ${platform}`}
                style={{ backgroundColor: bgColor }}
            >


                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <h1 className={`${font} text-2xl md:text-3xl p-10 text-white font-bold text-center`}>{title}</h1>

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="w-10/12 group mx-auto mt-auto mb-0 shadow-lg  flex flex-col bg-white rounded-t-xl border-white">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="bg-gray-800 h-8 w-full p-2 flex items-center rounded-t-xl">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="bg-red-400 h-3 w-3 rounded-full mx-1"></div>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="bg-yellow-400 h-3 w-3 rounded-full mx-1"></div>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="bg-green-400 h-3 w-3 rounded-full mx-1"></div>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <button
                            // @ts-expect-error TS(2345): Argument of type '""' is not assignable to paramet... Remove this comment to see the full error message
                            onClick={() => setImage('')}
                            className="ml-auto mr-4 cursor-pointer">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <svg className="group-hover:inline-block hidden w-4 h-4 text-white rounded-full z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>

                        </button>
                    </div>



                    {image ?
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <img src={image && image} className="object-cover " alt="preview" />

                        </div>
                        :
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="flex flex-col p-20 py-28 bg-white items-center justify-center">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <input type="file"
                                className="text-xl cursor-pointer mb-2 bg-white rounded border"
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

export default PreviewTheme;