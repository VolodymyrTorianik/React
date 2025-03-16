import { Component } from "react";

export class Post extends Component {
    constructor(props) {
        super(props);

        this.setDetailsState = () =>
            this.setState((prevState) => ({
                post: {
                    ...prevState.post,
                    isShowDetails: !prevState.post.isShowDetails
                }
            }));

        this.state = {
            post: {
                isShowDetails: false,
                ...props.post
            }
        };

        this.delPost = () => {
            this.setState({ post: null }); 
        };
    }

    render() {
        const { post } = this.state;

        if (!post) return null; 

        return (
            <div className="posts">
                <div className="wrapper">
                    <div className="nameItem">
                        {post.id}, {post.title}
                    </div>
                    <div>
                        <button onClick={this.setDetailsState}>
                            {post.isShowDetails ? "Hide Details" : "Show Details"}
                        </button>
                        <button onClick={this.delPost}>
                            Delete
                        </button>
                    </div>
                </div>
                <hr />
                <div className="showDetails">
                    {post.isShowDetails && JSON.stringify(post)}
                </div>
            </div>
        );
    }
}
