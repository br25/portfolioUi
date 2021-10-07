import React from "react";
import { Link } from "react-router-dom";
// import meeting from "../images/meeting.jpg";

const Content = () => {
	return (
		<>
			<div>
				<div className="flex justify-center">
					<Link className="p-image">Product image 1</Link>
				</div>
				<div className="text-center py-6">
					<h1 className="text-green-600 text-xl">Product One</h1>
					<p className="text-sm">Short title's</p>
					<span>$45</span>
				</div>
			</div>
			<div>
				<div className="flex justify-center">
					<Link className="p-image">Product image 2</Link>
				</div>
				<div className="text-center py-6">
					<h1 className="text-green-600 text-xl">Product Two</h1>
					<p className="text-sm">Crispy</p>
					<span>$5</span>
				</div>
			</div>
			<div>
				<div className="flex justify-center">
					<Link className="p-image">Product image 3</Link>
				</div>
				<div className="text-center py-6">
					<h1 className="text-green-600 text-xl">Product Three</h1>
					<p className="text-sm">Delicious</p>
					<span>$30</span>
				</div>
			</div>
		</>
		);
};

export default Content;