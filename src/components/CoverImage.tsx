import React from "react";
import "./CoverImage.css";
import "../assets/css/patterns.css";
// @ts-expect-error TS(6142): Module './Themes/ModernTheme' was resolved to '/Us... Remove this comment to see the full error message
import ModernTheme from "./Themes/ModernTheme";
// @ts-expect-error TS(6142): Module './Themes/BasicTheme' was resolved to '/Use... Remove this comment to see the full error message
import BasicTheme from "./Themes/BasicTheme";
// @ts-expect-error TS(6142): Module './Themes/OutlineTheme' was resolved to '/U... Remove this comment to see the full error message
import OutlineTheme from "./Themes/OutlineTheme";
// @ts-expect-error TS(6142): Module './Themes/PreviewTheme' was resolved to '/U... Remove this comment to see the full error message
import PreviewTheme from "./Themes/PreviewTheme";
// @ts-expect-error TS(6142): Module './Themes/StylishTheme' was resolved to '/U... Remove this comment to see the full error message
import StylishTheme from "./Themes/StylishTheme";
// @ts-expect-error TS(6142): Module './Themes/MobileMockupTheme' was resolved t... Remove this comment to see the full error message
import MobileMockupTheme from "./Themes/MobileMockupTheme";
// @ts-expect-error TS(6142): Module './Themes/BackgroundTheme' was resolved to ... Remove this comment to see the full error message
import BackgroundTheme from "./Themes/BackgroundTheme";

const CoverImage = (props: any) => {
	// hexToRgbA(hex, opacity) {
	// 	var c;
	// 	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
	// 		c = hex.substring(1).split("");
	// 		if (c.length === 3) {
	// 			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
	// 		}
	// 		c = "0x" + c.join("");
	// 		return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + `,${opacity})`;
	// 	}
	// 	throw new Error("Bad Hex");
	// }

	const { theme } = props;

// @ts-expect-error TS(7006): Parameter 'theme' implicitly has an 'any' type.
	const selectTheme = (theme) => {
		switch (theme) {
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			case 'basic': return <BasicTheme config={props} />
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			case 'modern': return <ModernTheme config={props} />
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			case 'outline': return <OutlineTheme config={props} />
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			case 'preview': return <PreviewTheme config={props} />
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			case 'stylish': return <StylishTheme config={props} />
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			case 'mobile': return <MobileMockupTheme config={props} />
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			case 'background': return <BackgroundTheme config={props} />

// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			default: return <BasicTheme config={props} />
		}
	}


	return (
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		<div className="md:w-full md:scale-100 scale-50">
			{selectTheme(theme)}		</div>
	);




}

export default CoverImage;
