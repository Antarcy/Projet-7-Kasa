import React from "react";
import Banner from "../Components/Banner"
import Card from "../Components/Card"
import { Link } from "react-router-dom";
import data from "../data/destination.json";

export default function Home() {
	return (
		<div>
			<Banner />
			<div className="cards-container">
				{data.map((appart) => (
					<div className="card_logement">
						<Link
							className="link_card_logement"
							key={`${appart.id}`}
							to={`/logement/${appart.id}`}
						>
							<Card
								key={`${appart.id}`}
								cover={appart.cover}
								title={appart.title}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}