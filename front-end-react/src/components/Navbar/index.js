// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/item" activeStyle>
						Items
					</NavLink>
					<NavLink to="/itemlist" activeStyle>
						Items list
					</NavLink>
					<NavLink to="/test" activeStyle>
						Test
					</NavLink>
					<NavLink to="/contact" activeStyle>
						Contact Us
					</NavLink>
					<NavLink to="/blogs" activeStyle>
						Blogs
					</NavLink>
					<NavLink to="/sign-up" activeStyle>
						Sign Up
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
