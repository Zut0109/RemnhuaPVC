// Filename - pages/index.js

import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Features from "../components/Features";
import NewItems from "../components/NewItems";

const Home = () => {
	return (
		<div>
			<Banner/>
			<Categories/>
			<Features/>
			<NewItems/>
		</div>
	);
};

export default Home;
