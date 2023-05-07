import React, { useContext, useState } from "react";
// import { exportComponentAsPNG } from "react-component-export-image";
import "./CoverImage.css";
// @ts-expect-error TS(6142): Module '../utils/ImgContext' was resolved to '/Use... Remove this comment to see the full error message
import { ImgContext } from "../utils/ImgContext";
import unsplash from "../utils/unsplashConfig";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'dom-... Remove this comment to see the full error message
import domtoimage from "dom-to-image";

const ComponentToImg = (props: any) => {

	const [loading, setLoading] = useState(false)

// @ts-expect-error TS(2339): Property 'unsplashImage' does not exist on type 'u... Remove this comment to see the full error message
	const { unsplashImage } = useContext(ImgContext);
	const componentRef = React.createRef();




// @ts-expect-error TS(7006): Parameter 'data' implicitly has an 'any' type.
	async function saveImage(data) {
		var a = document.createElement("A");
// @ts-expect-error TS(2339): Property 'href' does not exist on type 'HTMLElemen... Remove this comment to see the full error message
		a.href = data;
// @ts-expect-error TS(2551): Property 'download' does not exist on type 'HTMLEl... Remove this comment to see the full error message
		a.download = `cover.png`;
		document.body.appendChild(a);
		setLoading(false)

		a.click();
		document.body.removeChild(a);
	}

	const downloadImage = async () => {
		// exportComponentAsPNG(componentRef, 'cover')
		setLoading(true)

		const element = componentRef.current;

		// console.log(element)
		// console.log(element.offsetHeight)

		let data = await domtoimage.toPng(componentRef.current, {
// @ts-expect-error TS(2571): Object is of type 'unknown'.
			height: element.offsetHeight * 2,
// @ts-expect-error TS(2571): Object is of type 'unknown'.
			width: element.offsetWidth * 2,
			style: {
				transform: "scale(" + 2 + ")",
				transformOrigin: "top left",
// @ts-expect-error TS(2571): Object is of type 'unknown'.
				width: element.offsetWidth + "px",
// @ts-expect-error TS(2571): Object is of type 'unknown'.
				height: element.offsetHeight + "px",
			}
		})

		// console.log(data)
		await saveImage(data);


		if (unsplashImage) {
			unsplash.photos.trackDownload({ downloadLocation: unsplashImage.downloadLink, });
		}
	}


	return (
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		<React.Fragment>
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<div ref={componentRef}>{props.children}</div>
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<button
				className="border p-2 bg-gray-700 hover:bg-gray-800 flex items-center text-white text-xl rounded-lg m-4 px-4"
				onClick={() => downloadImage()}>


// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
				<span>
					{
						loading ?
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
							<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white animate animate-spin" fill="currentColor" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>
							:
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
					}
				</span>

// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
				<span className="mx-2">Download</span>
			</button>
		</React.Fragment>
	);

}

export default ComponentToImg;
