import React from "react";

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <img src={this.props.movie.Poster} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.movie.Title}</h5>
                    <p className="card-subtitle text-muted">Year: {this.props.movie.Year}</p>
                    <p className="card-subtitle text-muted">Type: {this.props.movie.Type}</p>
                </div>
            </div>
        );
    }
}
