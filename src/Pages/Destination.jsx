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
	const slidePics = pickedAppart.pictures;
	const tags = pickedAppart.tags;
	const equipments = pickedAppart.equipments;
	const equip = equipments.map((item, index) => (
		<li key={index} className="equipList">
			{item}
		</li>
	));
	return (
		<div key={params.id} className="fiche-container">
			<Carrousel slides={slidePics} />
			<div className="title-tags-container">
				<div className="title-container redFont">
					<h1>{pickedAppart.title}</h1>
					<h3>{pickedAppart.location}</h3>
				</div>
				<div className="tags-container">
					{tags.map((tag) => (
						<Tag key={tag} tag={tag} />
					))}
				</div>
			</div>
			<div className="rate-host-container">
				<div className="host-container redFont">
					<Host hostName={pickedAppart.host.name} hostPic={pickedAppart.host.picture} />
				</div>
				<div className="rate-container">
					<Rate score={pickedAppart.rating} />
				</div>
			</div>
			<div className="collapse-fiche-container">
				<Collapse
					aboutTitle="Description"
					aboutText={pickedAppart.description}
				/>
				<Collapse aboutTitle="Équipements" aboutText={equip} />
			</div>
		</div>
	);
}