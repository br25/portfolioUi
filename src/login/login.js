import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./loginform";

const Login = () => {
	const [user, setUser] = useState( {email: "", password: ""} );
	const [error, setError] = useState("");
	
	const Login = (details) => {
		console.log(details);
		if (details.email === adminUser.email && details.password === adminUser.password) {
			console.log("Loged In");
			setUser({
				email: details.email,
				password: details.password
			});
		} else {
			console.log("Details do not match!");
			setError("Details do not match!");
		}

	};

	const Logout = () => {
		setUser({  email:"", password:""});
	};


	const adminUser = { 
		email: "robin@yah",
		password: "yah"
	};


	return(
			
			<div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			    <div className="px-8 py-6 mx-8 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
				    <div className="max-w-md w-full space-y-8">
					     {(user.email !== "") ? (
					     	<div>
					     		<h1 className="text-xl text-yellow-700">Welcome, <span className="text-green-600">{user.email}</span> ! You are Successfully Sign In</h1>
					     		<p className="text-sm mt-8">Please go back Home <Link className="underline text-blue-400" to="/">Click here</Link></p>
					     		or<br/>
					     		<button className="text-sm text-red-600" onClick={Logout}>Logout</button>
					     	</div>
					     ) : (
					     	<LoginForm Login={Login} error={error} />
					     )}
				    </div>
				</div>
			</div>
		);
};


export default Login;