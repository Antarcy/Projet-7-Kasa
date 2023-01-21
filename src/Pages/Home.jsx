import React from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import data from "../data/destination.json";

export default function Home() {
	return (
		<div>
			<Banner />
			<div className="cards-container">
				{data.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}