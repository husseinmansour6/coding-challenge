import React from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breweriesList: [],
        };
        this.generateTable = this.generateTable.bind(this);
    }

// Function to get all the breweries
    componentDidMount() {
        fetch('https://api.openbrewerydb.org/breweries')
            .then((response) => {
                return response.text();
            })
            .then((response) => {
                let parsedResponse = JSON.parse(response);
                console.log('parsed responce: ', parsedResponse);
                this.setState({ breweriesList: parsedResponse });
            });
    }

    // Generating the data in a table to view them
    generateTable() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.breweriesList.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    <Link to={'/viewBreweryData/' + item.id}>{item.name}</Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
    render() {
        return (
            <div>
                <h2>Here are a list of beers/breweries...</h2>
                {this.generateTable()}
            </div>
        );
    }
}
