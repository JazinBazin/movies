import React from "react";
import Movie from "./Movie";
import config from "../config";

export default class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loading: true,
            loadingError: false,
        }
    }

    fetchMovies = () => {
        fetch(`${config.apiUrl}&s=${this.props.searchString}`)
            .then(response => response.json())
            .then(response => {
                if (response.Response) {
                    this.setState({
                        movies: response.Search,
                        loading: false
                    });
                }
                else {
                    this.setState({
                        loading: false
                    });
                }

            })
            .catch(() => this.setState({
                loading: false,
                loadingError: true,
            }));
    }

    componentDidMount() {
        this.fetchMovies();
    }

    componentDidUpdate(prevProps) {
        if (this.props.searchString != prevProps.searchResult) {
            this.fetchMovies();
        }
    }

    render() {
        if (this.state.loading) return <h1>Loading...</h1>
        if (this.state.loadingError) return <h1>Something went wrong. Try again later.</h1>

        const movies = (this.state.movies)
            ? this.state.movies.map(movie => (
                <div key={movie.imdbID} className="col-12 col-md-6 col-lg-4 mb-3">
                    <Movie movie={movie} />
                </div>))
            : "Movies not found"

        return (
            <div className="row m-3">
                {movies}
            </div>
        );
    }
}