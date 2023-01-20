import React from "react";
import AboutBanner from "../Components/AboutBanner";
import Collapse from "../Components/Collapse"
import aboutArray from "../data/aboutArray.json"


export default function About() {
	return (
		<div>
			<AboutBanner />
			{aboutArray.map((rule) => (
				<Collapse aboutTitle={rule.aboutTitle} aboutText={rule.aboutText} />
			))}
		</div>
	);
}