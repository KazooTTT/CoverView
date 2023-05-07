import React from 'react';
const OutlineTheme = ({
    config
}: any) => {
    const { title, bgColor, author, icon, font, customIcon, platform } = config;

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="p-4 bg-white ">


            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className={`overflow-y-hidden rounded flex flex-col text-gray-800 px-10  ${platform} `}
                style={{ backgroundColor: bgColor }}
            >


                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className={`${font} rounded-2xl py-6 flex flex-col  `}>
                    {
                        customIcon ?
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <div className=" m-6">
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <img src={customIcon} alt="img" className="rounded-full object-cover w-24 h-24 bg-white p-1 border-white" />
                            </div>
                            :
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <div className="  mr-auto ml-2 items-center justify-center flex">
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <i className={`devicon-${icon.value}-plain text-white p-4 dev-icon text-8xl`}></i>
                            </div>
                    }
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <h1 className="text-3xl p-4 text-white md:text-5xl  font-bold ">{title}</h1>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className={`${font} w-full h-16  flex  mt-auto mb-0 p-2 px-6  items-center `}>

                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <h2 className="text-2xl text-white font-semibold">{author}</h2>

                    </div>
                </div>



            </div>


        </div>
    );
}

export default OutlineTheme;