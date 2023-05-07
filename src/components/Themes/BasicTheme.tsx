import React from 'react';


const BasicTheme = ({
    config
}: any) => {
    const { title, bgColor, pattern, author, icon, font, customIcon,platform } = config;

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="p-4 bg-white ">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className={`overflow-y-hidden flex  text-gray-800 items-center h-full ${platform} ${pattern} `}
                style={{ backgroundColor: bgColor }}
            >

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className={`${font} bg-white md:w-10/12  m-auto flex flex-col pt-12 rounded-xl`}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="px-12">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div>
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <h1 className="text-3xl md:text-5xl text-gray-800 font-bold text-center">{title}</h1>
                        </div>
                    </div>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className=" flex mx-4  p-4 rounded-xl items-center bg-white">
                        {
                            customIcon ?
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <div className="w-12 h-12  ">
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <img src={customIcon} alt="img" className="rounded-full bg-white p-1 border-white" />
                                </div>
                                :
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <div className="mr-auto ml-2 items-center justify-center flex">
                                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                    <i className={`devicon-${icon.value}-plain  p-4 dev-icon text-5xl`}></i>
                                </div>
                        }


                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <h2 className="text-xl ml-auto mr-2 font-semibold">{author}</h2>

                    </div>
                    
                    </div>

            </div>

        </div>
    );
}

export default BasicTheme;