import React from "react";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ""
        };
    }

    searchStringChanged = (e) => {
        this.setState({ searchString: e.target.value });
    }

    searchButtonClicked = () => {
        this.props.handleSearchButtonClicked(this.state.searchString);
    }

    render() {
        return (
            <div className="row mt-3">
                <div className="col p-0 mr-2">
                    <input
                        type="text"
                        className="form-control"
                        onChange={this.searchStringChanged}
                        value={this.state.searchString}
                    />
                </div>
                <div className="col-auto p-0">
                    <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={this.searchButtonClicked}>Search</button>
                </div>
            </div>
        );
    }
}