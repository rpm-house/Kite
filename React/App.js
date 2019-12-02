import React, { Component } from 'react';
class App extends Component{
	
	 //isMounted = false;
	constructor(props) {
		super(props);
		this.state = { serviceRequests: [], };
	}
	
	componentDidMount() {
		//this.isMounted = true;
		//var vehicleURL_cloud = "https://facebook.github.io/react-native/movies.json";
		//var vehicleURL_cloud = "https://rpmservices-brash-hedgehog.cfapps.sap.hana.ondemand.com/api/vehicle/getall";
			var vehicleURL_cloud = "http://localhost:8080/api/serviceRequest/getall";
		
		
		return fetch(vehicleURL_cloud, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}).then((response) => response.json())
			.then((responseJson) => {
				console.log("responseJson:", responseJson);
				// if (this._isMounted) {
				this.setState({
					serviceRequests: responseJson
				})
				 //}
				console.log("serviceRequests:", this.state.serviceRequests);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
	
	/*componentWillUnmount()
	{
		 this.isMounted = false;
	}*/

render() {
		return (<div className="container">
			<table className="table table-striped">
				<thead>
					<tr><th>Service RequestId </th><th> Request Name</th></tr></thead>
				{this.state.serviceRequests.map((serviceRequest, index) => (
					<tbody><tr><td>{serviceRequest.serviceRequestId} </td><td> {serviceRequest.requestName}</td>
						<td><button className="btn btn-info" onClick={this.handleDelete}>Delete</button></td>
					</tr></tbody>
				))}
			</table>
		</div>);
	}
	/*return (<div className="container">
			<table className="table table-striped">
				<thead>
					<tr><th>Movie Id </th><th> Movie Name</th></tr></thead>
				{this.state.movies.map((movie, index) => (
					<tbody><tr><td>{movie.id} </td><td> {movie.title}</td>
						<td><button className="btn btn-info" onClick={this.handleDelete}>Delete</button></td>
					</tr></tbody>
				))}
			</table>
		</div>);
	}*/

}

export default App;
