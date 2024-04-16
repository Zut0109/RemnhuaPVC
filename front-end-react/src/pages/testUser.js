import React from "react";
import axios from "axios";

class TestUser extends React.Component {
	state = {
		details: [],
	};

	componentDidMount() {

        let data ;

        axios.get('http://localhost:8000/user/')
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
								<h1>{detail.last_name} </h1>
								<p>{detail.first_name}</p>
                                <p>{detail.username}</p>
                                <p>{detail.phone_number}</p>
                                <p>{detail.email}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		)
			;
	}
}

export default TestUser;