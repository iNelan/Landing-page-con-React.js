import React from "react";

//include images into your bundle

import Card from "./Card.js";
import Jumbotron from "./Jumbotron.js";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="d-flex">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</>
	);
};

export default Home;
