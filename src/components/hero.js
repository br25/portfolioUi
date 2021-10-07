import React, {useState} from "react";
// import { Link } from "react-router-dom";
// import meeting from "../images/meeting.jpg";


const Hero = () => {
	const [mess, setMess] = useState("");


	const handleClick = () => {
		setMess(alert("Please Login your Account"));
	};

	return (
		// <div>
			// <img src={meeting} alt="meet" className="" />
			<div className="bg-white h-screen flex flex-col justify-center items-center">
				<h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl mb-10">Hero Section</h1>
				<button onClick={handleClick} className="text-white bg-yellow-500 px-8 py-4 rounded-lg shadow-lg animate-bounc hover:bg-blue-400 transition delay-200 duration-300 ease-in-out">Press</button>
			</div>
		// </div>
		);
};

export default Hero;