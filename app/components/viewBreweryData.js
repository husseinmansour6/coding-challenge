import React from 'react';

export default class ViewBreweryData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: [],
        };
    }
// Function to get the data of a specific brewery
    componentDidMount() {

        //declaring a variable for the id
        let breweryId = this.props.match.params.id;

        // Sending request to the server to get the data
        fetch('https://api.openbrewerydb.org/breweries/' + breweryId) 
            .then((response) => {
                return response.text();
            })
            .then((response) => {
                let parsedResponse = JSON.parse(response);
                console.log('brewery data: ', parsedResponse);
                this.setState({ allData: parsedResponse });
            });
    }

    render() {
        return (
            <div
                style={{
                    backgroundColor: '#E5E5E5',
                    minHeight: '100vh',
                    paddingTop: '100px',
                    alignContent: 'center',
                }}
            >
                <h1>Data for: {this.state.allData.name}</h1>
                <h3>Id: {this.state.allData.id}</h3>
                <h3>Name: {this.state.allData.name}</h3>
                <h3>Type: {this.state.allData.brewery_type}</h3>
                <h3>City: {this.state.allData.city}</h3>
                <h3>State: {this.state.allData.state}</h3>
                <h3>Country: {this.state.allData.country}</h3>
                <h3>Phone number: {this.state.allData.phone}</h3>
            </div>
        );
    }
}
