import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ( {Login,error} ) => {
	const [details,setDetails] = useState({email: "", password: ""});

	const submitHandler = e => {
		e.preventDefault();

		Login(details);
	};


	return (
			
			<div>
		    	<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
				</svg>
		        {/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" /> */}
		        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
		            Sign In
		        </h2>

		        <form className="mt-8 space-y-6" onSubmit={submitHandler}>
		      		<input type="hidden" name="remember" value="true" />
		      		{(error !== "") ? (<div>{error}</div>) : ""}
			        <div className="rounded-md shadow-sm -space-y-px">
				        <div>
				            <label for="email-address" className="sr-only">Email address</label>
				            <input onChange={ e => setDetails({...details, email: e.target.value})} value={details.email}
				            id="email-address" name="email" type="email" autocomplete="email" required 
				            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
				        </div>
				        <div>
				            <label for="password" className="sr-only">Password</label>
				            <input onChange={ e => setDetails({...details, password: e.target.value})} value={details.password}
				            id="password" name="password" type="password" autocomplete="current-password" required 
				            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
				        </div>
			        </div>

				    <div className="flex items-center justify-between">
				        <div className="flex items-center">
				            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
				            <label for="remember-me" className="ml-2 block text-sm text-gray-900">
				                Remember me
				            </label>
				        </div>

				        <div className="text-sm">
				            <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
				                Forgot your password?
				            </Link>
				        </div>
				    </div>

				    <div>
			        	<button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
					            {/* <!-- Heroicon name: solid/lock-closed --> */}
					            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
					            </svg>
				            </span>
				            Sign in
			        	</button>
				        <div className="mt-4">
				        	<span className="text-sm">Not a member?</span>
				        	<Link className="text-sm text-indigo-600 hover:underline" to="/registration">Sign up now</Link>
				      	</div>
			      	</div>
				</form>
			</div>		 
		);
};


export default LoginForm;










				    