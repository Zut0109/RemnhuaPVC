// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import Item from "./pages/items";
import ItemList from "./components/ItemList";
import Test from "./pages/test";

function App() {
	return (
		<Router>
			<Navbar/>
			<section className="container mx-auto mt-10">
				<div className="relative overflow-hidden">
					<img src="https://www.canva.com/create/banners/" alt="Banner"
						 className="w-full h-full object-cover"/>
					<div
						className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 opacity-50">
						<h1 className="text-white font-bold text-3xl">Tiêu đề banner</h1>
					</div>
				</div>

				<div className="flex mt-10 ml-10">
					<main className="w-3/4 mr-10">
						<Routes>
							<Route exact path="/" element={<Home/>}/>
							<Route exact path="/item" element={<Item/>}/>
							<Route path="/itemlist" element={<ItemList/>}/>
							<Route path="/test" element={<Test/>}/>
							<Route
								path="/contact"
								element={<Contact/>}
							/>
							<Route path="/blogs" element={<Blogs/>}/>
							<Route
								path="/sign-up"
								element={<SignUp/>}
							/>
						</Routes>
					</main>

					<aside className="w-1/4">
						<ul>
							<li>
								<a href="#">Tiêu đề 1</a>
							</li>
							<li>
								<a href="#">Tiêu đề 2</a>
							</li>
							<li>
								<a href="#">Tiêu đề 3</a>
							</li>
						</ul>
					</aside>
				</div>
			</section>

			<h1>This is footer</h1>
		</Router>
	);
}

export default App;
