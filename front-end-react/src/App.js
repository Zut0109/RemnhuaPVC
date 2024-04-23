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
import TestUser from "./pages/testUser";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Categories from "./components/Categories";
import NewItems from "./components/NewItems";
import Footer from "./components/Footer";
import Login from "./pages/login";
import Account from "./pages/account";

function App() {
	return (
		<Router>
			<Header/>
			<Navbar/>
			<Routes>
				<Route exact path="/" element={<Home/>}/>
				<Route exact path="/item" element={<Item/>}/>
				<Route path="/itemlist" element={<ItemList/>}/>
				<Route path="/test" element={<TestUser/>}/>
				<Route path="/account" element={<Account/>}/>
				<Route path="/login" element={<Login/>}/>
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
			<Footer/>
		</Router>
	);
}

export default App;
