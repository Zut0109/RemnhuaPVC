// Filename - pages/contact.js

import React from "react";

const ItemList = () => {
	return (
		<div className="container mx-auto my-auto large">
			<form onSubmit={this.handleSubmit}>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
							<span className="input-group-text"
								  id="basic-addon1">
								{" "}
								Author{" "}
							</span>
					</div>
					<input type="text" className="form-control"
						   placeholder="Name of the Poet/Author"
						   aria-label="Username"
						   aria-describedby="basic-addon1"
						   value={this.state.user} name="user"
						   onChange={this.handleInput}/>
				</div>

				<div className="input-group mb-3">
					<div className="input-group-prepend">
							<span className="input-group-text">
							Your Quote
							</span>
					</div>
					<textarea className="form-control "
							  aria-label="With textarea"
							  placeholder="Tell us what you think of ....."
							  value={this.state.quote} name="quote"
							  onChange={this.handleInput}>
						</textarea>
				</div>

				<button type="submit" className="btn btn-primary mb-5">
					Submit
				</button>
			</form>

			<hr
				style={{
					color: "#000000",
					backgroundColor: "#000000",
					height: 0.5,
					borderColor: "#000000",
				}}
			/>

			{this.state.details.map((detail, id) => (
				<div key={id}>
					<div className="card shadow-lg">
						<div className={"bg-" + this.renderSwitch(id % 6) +
							" card-header"}>Quote {id + 1}</div>
						<div className="card-body">
							<blockquote className={"text-" + this.renderSwitch(id % 6) +
								" blockquote mb-0"}>
								<h1> {detail.detail} </h1>
								<footer className="blockquote-footer">
									{" "}
									<cite title="Source Title">{detail.name}</cite>
								</footer>
							</blockquote>
						</div>
					</div>
					<span className="border border-primary "></span>
				</div>
			))}
		</div>
	);
};

export default ItemList;