import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../Components/Carrousel";
import Collapse from "../Components/Collapse";
import Host from "../Components/Host";
import Rate from "../Components/Rate";
import Tag from "../Components/Tag";
import data from "../data/destination.json";

export default function FicheLogement() {
	const params = useParams();
	const pickedAppart = data.find(({ id }) => id === params.id);
	const tags = pickedAppart.tags;
	console.log(tags);
	return (
		<div key={params.id}>
			<Carrousel />
			<h1>{pickedAppart.title}</h1>
			<h3>{pickedAppart.location}</h3>
			<Host />
			{tags.map((tag) => (
				<Tag key={tag} tag={tag}/>
			))}
			<Rate />
			<div className="collapse-fiche-content">
				<Collapse
					aboutTitle="Description"
					aboutText={pickedAppart.description}
				/>
				<Collapse
					aboutTitle="Équipements"
					aboutText={pickedAppart.description}
				/>
			</div>
		</div>
	);
}