import { Component } from "react";

export class Comment extends Component {
    constructor(props) {
        super(props);

        this.setDetailsState = () =>
            this.setState((prevState) => ({
                comment: {
                    ...prevState.comment,
                    isShowDetails: !prevState.comment.isShowDetails
                }
            }));

        this.state = {
            comment: {
                isShowDetails: false,
                ...props.comment
            }
        };

        this.delComment = () => {
            this.setState({ comment: null });
        };
    }

    render() {
        const { comment } = this.state;

        if (!comment) return null; 

        return (
            <div className="comments">
                <div className="wrapper">
                    <div>
                        {comment.id}, {comment.name}
                    </div>
                    <div>
                        <button onClick={this.setDetailsState}>
                            {comment.isShowDetails ? "Hide Details" : "Show Details"}
                        </button>
                        <button onClick={this.delComment}>
                            Delete
                        </button>
                    </div>
                </div>
                <hr />
                <div className="showDetails">
                    {comment.isShowDetails && JSON.stringify(comment)}
                </div>
            </div>
        );
    }
}
