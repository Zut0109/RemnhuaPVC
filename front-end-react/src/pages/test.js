import React from "react";
import axios from "axios";

class Test extends React.Component {
	state = {
		details: [],
	};

	componentDidMount() {

        let data ;

        axios.get('http://localhost:8000/items/')
        .then(res => {
            data = res.data;
            this.setState({
                details : data
            });
        })
        .catch(err => {})
    }
	render() {
		return (
			<div className="container mx-auto my-auto large">
				{this.state.details.map((detail, id) => (
					<div key={id}>
						<div>
							<div>
								<h1>{detail.name} </h1>
								<p>{detail.price}</p>
                                <p>{detail.size}</p>
                                <p>{detail.color}</p>
                                <p>{detail.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		)
			;
	}
}

export default Test;