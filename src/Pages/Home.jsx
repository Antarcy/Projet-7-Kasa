import React from "react";
import Header from "../Components/Header"
import Banner from "../Components/Banner"
import CardList from "../Components/CardList"
import Footer from "../Components/Footer"

export default function Home() {
	return (
		<div>
			<Header />
			<Banner />
			<CardList />
			<Footer />
		</div>
	);
}