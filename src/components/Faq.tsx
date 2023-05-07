import React, { useState } from 'react';
// @ts-expect-error TS(6142): Module './Header' was resolved to '/Users/kazoottt... Remove this comment to see the full error message
import Header from './Header';
const Faq = () => {

    const [showMsg, setShowMsg] = useState(false)

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Header />

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className=" md:w-10/12 mx-auto md:p-20 p-4">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <h1 className="font-bold md:text-4xl  text-2xl font-Anek text-center">Frequently asked questions</h1>


                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="flex flex-wrap justify-center mt-20 font-Inter">

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="md:w-5/12 m-4 ">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-xl font-bold py-2">What is Coverview?</p>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-lg text-gray-700">Coverview is a tool to create cover images for your blogs quickly and easily.</p>
                    </div>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="md:w-5/12 m-4">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-xl font-bold py-2">Is Coverview free?</p>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-lg text-gray-700">Yes! Coverview is absolutely free to use.</p>
                    </div>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="md:w-5/12 m-4">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-xl  font-bold py-2">Can I upload my custom brand logo?</p>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-lg text-gray-700">Yes.Just search and select <span className="font-semibold">custom</span> in icon section and you can upload your own logo to personalize your cover images.</p>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="italic mt-2">See <a href="https://twitter.com/WankhadeRutik/status/1518270774335111168?s=20&t=XMjbJpGAC7anadJ690_DUg" className="text-blue-400" target="_blank" rel="noreferrer">example</a></p>
                    </div>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="md:w-5/12 m-4">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-xl font-bold my-2">Can I use coverview for non-technical/personal blogs?</p>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-lg text-gray-700">Yes! Why not? Even though coverview was built with technical blogs in mind, you can still use it for your personal blogs. Check out the stylish theme for more.</p>
                    </div>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="md:w-5/12 m-4">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-xl font-bold my-2">Why use Coverview?</p>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-lg text-gray-700">Because it's simple, quick and easy to use. Why spend hours designing when you can create cover images in seconds?</p>
                    </div>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="md:w-5/12 m-4">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-xl font-bold my-2">Want to support/sponsor the project?</p>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-lg text-gray-700">If coverview adds value in your life and you wish to support this project, you can <a href="https://github.com/sponsors/rutikwankhade" target="_blank" rel="noreferrer" className="font-semibold hover:underline">sponsor me on Github</a> or <a href="https://www.buymeacoffee.com/rutikwankhade" target="_blank" rel="noreferrer" className="hover:underline text-pink-400 font-semibold">buy me a coffee</a>.</p>
                    </div>

                </div>

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="md:w-1/2 mx-auto text-center mt-20">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <button
                        onClick={() => setShowMsg(!showMsg)}
                        className="text-6xl text-center m-2">💡</button>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <p className="text-xl font-Anek font-semibold text-gray-800">Want to know a secret? Click me</p>

                </div>

                {
                    showMsg ?
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div>
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <h2 className="md:w-7/12 text-4xl border text-center mx-auto my-10 p-10 rounded-xl shadow-sm font-Nunito">Blog titles with a minimum of 8 words have 21% better click-through</h2>
                        </div> :
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div></div>
                }

            </div>
        </div>
    );
}

export default Faq;