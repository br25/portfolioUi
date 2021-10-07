import React from "react";
import { Link } from "react-router-dom";


const Dropdown = ( {click,toggle} ) => {
	return (
		<div className={click ? "text-white text-xl bg-yellow-500 shadow-lg border border-gray-300 flex flex-col" : "hidden"} onClick={toggle}>
			<Link className="py-4 px-4 hover:bg-blue-400 border-b border-gray-300" to="/">Home</Link>			
			<Link className="py-4 px-4 hover:bg-blue-400 border-b border-gray-300" to="/menu">Menu</Link>
			<Link className="py-4 px-4 hover:bg-blue-400 border-b border-gray-300" to="/about">About</Link>
			<Link className="py-4 px-4 hover:bg-blue-400 border-gray-300" to="/contact">Contact</Link>
		</div>
		);
};

export default Dropdown;