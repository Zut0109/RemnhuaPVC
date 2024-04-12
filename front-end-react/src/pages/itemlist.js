import React from "react";
import axios from "axios";

class ItemList extends React.Component {
	state = {
		details: [],
		name: "",
		price: "",
		size: "",
		color: "",
		description: ""
	};

	componentDidMount() {
		let data;

		axios
			.get("http://localhost:8000/items/")
			.then((res) => {
				data = res.data;
				this.setState({
					details: data,
				});
			})
			.catch((err) => {});
	}
	render() {
		return (
			<div className="container mx-auto my-auto large">
				{/*{this.state.details.map((detail, id) => (*/}
				{/*	<div key={id}>*/}
				{/*		<div>*/}
				{/*			<div>*/}
				{/*				<h1>{detail.detail} </h1>*/}
				{/*				<footer>--- by*/}
				{/*					<cite title="Source Title">*/}
				{/*						{detail.name}</cite>*/}
				{/*				</footer>*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*))}*/}
				Hello
			</div>
		)
			;
	}
}

export default ItemList;