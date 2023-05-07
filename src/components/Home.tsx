import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '../assets/icons/logo.png' or i... Remove this comment to see the full error message
import logo from '../assets/icons/logo.png'
import { Link } from 'react-router-dom';
// @ts-expect-error TS(2307): Cannot find module '../assets/images/cover1.webp' ... Remove this comment to see the full error message
import cover1 from '../assets/images/cover1.webp'
// @ts-expect-error TS(2307): Cannot find module '../assets/images/cover2.webp' ... Remove this comment to see the full error message
import cover2 from '../assets/images/cover2.webp'
// @ts-expect-error TS(2307): Cannot find module '../assets/images/cover3.webp' ... Remove this comment to see the full error message
import cover3 from '../assets/images/cover3.webp'
// @ts-expect-error TS(2307): Cannot find module '../assets/images/cover4.webp' ... Remove this comment to see the full error message
import cover4 from '../assets/images/cover4.webp'



// @ts-expect-error TS(2307): Cannot find module '../assets/images/step1.png' or... Remove this comment to see the full error message
import step1 from '../assets/images/step1.png'
// @ts-expect-error TS(2307): Cannot find module '../assets/images/step2.png' or... Remove this comment to see the full error message
import step2 from '../assets/images/step2.png'

// @ts-expect-error TS(2307): Cannot find module '../assets/images/hashnode-logo... Remove this comment to see the full error message
import hashnodeLogo from '../assets/images/hashnode-logo.png'
// @ts-expect-error TS(2307): Cannot find module '../assets/images/dev-logo.png'... Remove this comment to see the full error message
import devLogo from '../assets/images/dev-logo.png'

// @ts-expect-error TS(6142): Module './walloflove' was resolved to '/Users/kazo... Remove this comment to see the full error message
import WallOfLove from './walloflove';
const Home = () => {


    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="bg-gray-50">

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="text-xl  flex border-b border-gray-100  p-2 md:w-10/12 mx-auto">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="flex items-center">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={logo} alt="logo" className="w-8 h-8 mx-2" />
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <h1 className="font-semibold md:text-xl text-lg font-Inter">Coverview</h1>
                </div>

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <a href="https://github.com/rutikwankhade/CoverView" target="_blank" rel="noreferrer" className="hover:translate-x-2 duration-300 bg-gray-700 group rounded-xl md:px-4 text-white md:text-sm text-xs ml-auto mr-4 font-Inter font-semibold p-2">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <span className="text-sm">⭐ Star on Github</span>
                </a>
            </div>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="  mx-auto md:px-20 py-6   flex flex-col items-center">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <h1 className="md:w-7/12 m-10 text-center md:text-5xl text-3xl font-extrabold text-gray-700 font-Anek">
                    Creating cover images for your blogs is now super easy
                </h1>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link to="/editor" className="hover:translate-x-2 duration-300 bg-gray-700 hover:bg-gray-800 group rounded-full px-4 md:px-8 text-white md:text-2xl text-lg mx-auto font-Inter font-semibold md:p-4 p-2">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <span className="md:text-2xl text-lg">Open editor &rarr;</span>
                </Link>
            </div>




            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className=" temple flex flex-row items-center justify-center mx-auto md:w-10/12">

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="m-4 transform -translate-y-20 border animate hover:scale-105 hover:-rotate-3  rotate-6 duration-100 bg-white p-2 shadow-sm w-1/5 rounded-lg flex flex-col ">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={cover2} className="border border-gray-100 rounded mb-2" alt="cover1" />
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <p className="animate animate-pulse bg-gray-50 md:h-5 h-2 rounded mb-2"></p>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <p className="animate animate-pulse w-8/12 bg-gray-50 md:h-5 h-2 rounded mb-2"></p>

                </div>

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="m-4 transform hover:scale-105 hover:rotate-3 -rotate-2  duration-300 bg-white p-4 shadow-sm w-1/3 rounded-lg flex flex-col ">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={cover1} className="rounded border border-gray-100 mb-2" alt="cover-2" />
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <p className="animate animate-pulse bg-gray-50 md:h-6 h-3 rounded mb-2"></p>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <p className="animate animate-pulse w-8/12 bg-gray-50 md:h-6 h-3 rounded mb-2"></p>

                </div>

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="m-4 transform -translate-y-20 border animate hover:scale-105 hover:rotate-3 -rotate-6 duration-100 bg-white p-2 shadow-sm w-1/5 rounded-lg flex flex-col ">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={cover3} className="rounded border border-gray-100 mb-2" alt="cover3" />
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <p className="animate animate-pulse bg-gray-50 md:h-5 h-2 rounded mb-2"></p>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <p className="animate animate-pulse w-8/12 bg-gray-50 md:odd:h-5 h-2 rounded mb-2"></p>

                </div>

            </div>





            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="md:my-32  my-10 mx-auto">

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="md:w-10/12 mx-auto flex flex-col ">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="md:w-9/12 text-center mx-auto ">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <h2 className="text-5xl py-4 font-bold font-Anek text-gray-700">Why cover images are more important than you think?</h2>

                    </div>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="flex md:flex-row flex-col mx-auto justify-center my-10 mx-auto">

                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="m-10 p-10 bg-white rounded-xl shadow-xl shadow-gray-100 flex flex-col  md:w-4/12 ">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <div className=" my-2 bg-purple-300 h-24 w-24 p-4 flex justify-center items-center rounded-full">
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <svg className="text-white w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                            </div>
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <p className="text-2xl md:text-left text-center text-gray-700">Around <span className="font-bold">7 million</span> blog posts are published daily. And with the rise of new-age blogging tools, it will only go up.</p>
                        </div>

                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="m-10 p-10 bg-white rounded-xl shadow-xl shadow-gray-100 flex  flex-col  md:w-4/12 ">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <div className=" my-2 bg-green-300 h-24 w-24 p-4 flex justify-center items-center rounded-full">
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <svg className="text-white w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            </div>
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <p className="text-2xl md:text-left text-center text-gray-700">A good cover image can lead to <span className="font-bold">higher conversion rate</span> than a random stock image.</p>
                        </div>

                    </div>



                </div>


                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <h2 className="md:text-5xl text-3xl md:w-1/2 mx-auto mt-32 font-bold font-Anek text-center text-gray-700">With coverview, you can create cover images in <span className="text-indigo-400">seconds</span>.</h2>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="md:w-8/12 my-20 flex md:flex-row flex-col mx-auto">

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="md:w-1/3 flex flex-col mx-10">

                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="text-center">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <div className="text-xl mx-auto w-10 h-10 p-2 font-bold text-white bg-gray-700 rounded-full flex items-center justify-center">1</div>

                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">Add title and author of your blog post</p>
                        </div>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <img src={step1} alt="preview" className="mt-2 rounded-lg shadow-sm" />

                    </div>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="flex items-center font-bold text-3xl text-center mx-auto">--------&rarr;</div>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="flex flex-col md:w-1/3 mx-10">

                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="text-center">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <div className="text-xl mx-auto w-10 h-10 p-2 font-bold text-white bg-gray-700 rounded-full flex items-center justify-center">2</div>

                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">Customize with colors, fonts, icons and patterns</p>
                        </div>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <img src={step2} alt="preview" className="mt-2 rounded-lg shadow-sm" />

                    </div>
                </div>



                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="md:w-8/12  flex md:flex-row flex-col justify-center items-center mx-auto">

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="text-center md:w-1/3 m-4">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="text-xl mx-auto w-10 h-10 p-2 font-bold text-white bg-gray-700 rounded-full flex items-center justify-center">3</div>

                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">Choose from different themes</p>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-xl">Unsplash integration, custom icon for personal branding and more.</p>
                    </div>

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="flex md:w-8/12 hideout p-6">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="flex flex-col w-1/2 ">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <img src={cover1} alt="preview" className=" hover:scale-105 duration-300 m-2 rounded-lg shadow-sm" />
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <img src={cover2} alt="preview" className="hover:scale-105 duration-300  m-2 rounded-lg shadow-sm" />

                        </div>


                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className="flex flex-col mt-4 w-1/2">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <img src={cover3} alt="preview" className="hover:scale-105 duration-300   m-2 rounded-lg shadow-sm" />
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <img src={cover4} alt="preview" className="hover:scale-105 duration-300  m-2 rounded-lg shadow-sm" />

                        </div>

                    </div>

                </div>


                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="md:w-6/12 my-20 mx-auto">

                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="text-center m-4">

                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">Supports platforms like Hashnode or Dev.to</p>
                    </div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className="flex mx-auto justify-center">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <img src={hashnodeLogo} className="w-20 m-2" alt="hashnode" />
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <img src={devLogo} className="w-20 m-2" alt="dev" />
                    </div>
                </div>


                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <WallOfLove />

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="md:w-8/12 mx-auto pt-24 p-4">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <h2 className="text-6xl text-center font-Anek font-bold text-gray-700 mx-auto">Simple, quick, and easy to use</h2>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <p className="text-2xl text-center py-4 md:w-8/12 mx-auto">So you can focus on writing your blog and never worry about those cover images.</p>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Link to="/editor" >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <button className="flex mx-auto my-4 hover:translate-x-2 duration-300 bg-gray-700  rounded-full px-6 text-white text-xl font-Inter font-semibold p-4">It's Free! Try now &rarr;</button>
                    </Link>
                </div>

            </div>




            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <footer className="bg-white p-10 flex md:flex-row flex-col font-Inter md:px-20 justify-center items-center">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="md:w-1/2 flex flex-col">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <span className="text-lg">Made with 💛 by <a href="https://twitter.com/WankhadeRutik" className="font-semibold" target="_blank" rel="noreferrer">Rutik Wankhade</a></span>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <span className="text-lg font-Nunito">checkout <a href="https://rutikwankhade.dev" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-pink-400">more cool stuff</a> I built</span>
                </div>

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="md:text-lg text-sm flex flex-wrap  ">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Link to="/faq" className="m-2 hover:font-semibold">📌 How to use</Link>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <a href="https://github.com/rutikwankhade/CoverView" target="_blank" rel="noreferrer" className="m-2 hover:font-semibold">⭐ Star on Github</a>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <a href="https://www.buymeacoffee.com/rutikwankhade" target="_blank" rel="noreferrer" className="m-2 hover:font-semibold">🥤 Buy me a coffee</a>
                </div>
            </footer>

        </div>
    );
}

export default Home;