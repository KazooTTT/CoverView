import React from 'react';
import { Link } from 'react-router-dom'
// @ts-expect-error TS(2307): Cannot find module '../assets/icons/logo.png' or i... Remove this comment to see the full error message
import logo from '../assets/icons/logo.png'
const Header = () => {

    const     tweetText = encodeURIComponent(`type your thoughts here, Try https://coverview.vercel.app by @WankhadeRutik`)

    return ( 
        
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="text-xl md:px-2 flex  border-b border-gray-100 p-2">
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
					<Link to="/" className="flex items-center">
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
						<img src={logo} alt="logo" className="w-8 h-8 mx-4" />
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
						<h1 className="font-semibold">Coverview</h1>

					</Link>

// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
					<div className="ml-auto md:mr-4 ">
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
						<Link to="/faq" className="text-gray-700 hover:text-gray-800 text-base font-Nunito mx-4"><span className="hidden md:inline-block">How to use</span></Link>
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
						<a href="https://www.buymeacoffee.com/rutikwankhade" target="_blank" rel="noreferrer" className="text-base mx-2 font-Nunito">🥤 <span className="hidden md:inline-block">Buy me a coffee</span></a>
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
						<a   href={`https://twitter.com/intent/tweet?text=${tweetText}`} className="mx-2 bg-blue-400 md:text-sm text-xs rounded-full px-4 font-semibold text-white p-1">Share on Twitter</a>
					</div>

				</div>
    
     );
}
 
export default Header;