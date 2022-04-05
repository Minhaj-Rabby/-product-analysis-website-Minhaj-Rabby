import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import "./Header.css";

const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="fixed top-0 left-0 right-0 header-design">
			<div className="container mx-auto ">
				<nav className="flex justify-between items-center py-2 md:px-0 px-4">
					<div>
						<NavLink to={"/"}>
							<span>Women's Bag Review</span>
						</NavLink>
					</div>
					<div
						onClick={() => {
							setOpen(!open);
						}}
						className="w-6 h-6 md:hidden"
					>
						{open ? <XIcon /> : <MenuIcon />}
					</div>
					<ul
						className={`md:flex  md:static  w-full md:w-auto md:text-left text-center design absolute duration-500 ease-in ${open ? `top-10 left-0` : `top-[-250px] left-0`}`}>
						
						<li className="mx-4 md:my-0 my-3">
							<NavLink
								to={"/"}
								className={(navInfo) =>
									navInfo.isActive ? classes.active : "a"
								}
								onClick={() => setOpen(false)}
							>
								Home
							</NavLink>
						</li>
						<li className="mx-4 md:my-0 my-3">
							<NavLink
								to={"/reviews"}
								className={(navInfo) =>
									navInfo.isActive ? classes.active : "a"
								}
								onClick={() => setOpen(false)}
							>
								Reviews
							</NavLink>
						</li>
						<li className="mx-4 md:my-0 my-3">
							<NavLink
								to={"/dashboard"}
								className={(navInfo) =>
									navInfo.isActive ? classes.active : "a"
								}
								onClick={() => setOpen(false)}
							>
								Dashboard
							</NavLink>
						</li>
						<li className="mx-4 md:my-0 my-3">
							<NavLink
								to={"/blogs"}
								className={(navInfo) =>
									navInfo.isActive ? classes.active : "a"
								}
								onClick={() => setOpen(false)}
							>
								Blogs
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			
		</div>
	);
};

export default Header;