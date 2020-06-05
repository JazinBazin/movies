import React from "react";
import MoviesList from "./components/MoviesList";
import Search from "./components/Search";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ""
        }
    }

    handleSearchButtonClicked = (searchString) => {
        this.setState({
            searchString: searchString
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Search handleSearchButtonClicked={this.handleSearchButtonClicked} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <MoviesList searchString={this.state.searchString} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;