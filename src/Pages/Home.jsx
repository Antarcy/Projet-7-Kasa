import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import MiniSlide from "../Components/MiniSlide"
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get("/logements.json").then((res) => setData(res.data));
	}, []);
	return (
		<div>
			<Banner />
			<div className="cards-container">
				{data.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${appart.id}`}>
							<MiniSlide slides={appart.pictures} cover={appart.cover} title={appart.title} id={appart.id} />
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}