import React from "react";

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-auto">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.props.handlePreviousPageClicked}>
                        Previus
                    </button>
                    <span className="ml-2 mr-2" >{this.props.page}</span>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.props.handleNextPageClicked}>
                        Next
                    </button>
                </div>
            </div>
        )
    }
}