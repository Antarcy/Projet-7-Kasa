import React from "react";
import AboutBanner from "../Components/AboutBanner";
import Collapse from "../Components/Collapse"
import aboutArray from "../data/aboutArray.json"  // j'ai créé un fichier JSON avec les données des collapses


export default function About() {
	return (
		<div>
			<AboutBanner />
			{aboutArray.map((rule, id) => (
				<Collapse key={id} aboutTitle={rule.aboutTitle} aboutText={rule.aboutText} aboutStyle="about-style" />
			))}
		</div>
	);
}