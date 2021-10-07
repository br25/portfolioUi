import React, { Component } from "react";


class Form extends Component {

	constructor(){
		super();
		this.state = { 
			fname: " ",
			lname: " ",
			email: " ",
			mobile: " "
		};
	};



	handleChange = (e) => {
		var inputName = e.target.name;
		var inputValue = e.target.value;


		this.setState({[inputName]: inputValue});

		if(inputName === "fname") {
			var Pattern = /^([a-zA-Z]){2,30}$/;
			if(!Pattern.test(inputValue)) {
				this.setState({fname:"First Name is not Valid"});
			};
		};

		if(inputName === "lname") {
			var Pattern = /^([a-zA-Z]){2,30}$/;
			if(!Pattern.test(inputValue)) {
				this.setState({lname:"Last Name is not Valid"});
			};
		};


		if(inputName === "email") {
			var Pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if (!Pattern.test(inputValue)) {
				this.setState({email:"Email ID is not Valid"});
			};
		};

		if(inputName === "mobile") {
			if(!Number(inputValue)) {
				this.setState({mobile:"Mobile is not Valid"});
			};
		};
	};


	handleSubmit = (e) => {
		e.preventDefault();
		alert("Submitted");
		console.log("submitted");
	};



	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
				    <h1>First Name: </h1>
					<input
						type="text"
						name="fname"
						placeholder="First Name"
						onChange={this.handleChange}
						
					/>
					<h6>{this.state.fname}</h6>


					<h1>Last Name: </h1>
					<input
						type="text"
						name="lname"
						placeholder="Last Name"
						onChange={this.handleChange}
						
					/>
					<h6>{this.state.lname}</h6>


					<h1>Email: </h1>
					<input
						type="email"
						name="email"
						placeholder="Email"
						onChange={this.handleChange}
						
					/>
					<h6>{this.state.email}</h6>


					<h1>Mobile: </h1>
					<input
						type="text"
						name="mobile"
						placeholder="Mobile"
						onChange={this.handleChange}
						
					/>
					<h6>{this.state.mobile}</h6>


					<input
						type="submit"
						name="submit"
						value="Submit"
					/>
				</form>
			</div>	
			);
	};

};



export default Form;