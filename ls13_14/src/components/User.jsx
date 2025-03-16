import { Component } from "react";

export class User extends Component {
    constructor(props) {
        super(props);

        this.setDetailsState = () => 
            this.setState(prevState => ({
                user: { 
                    ...prevState.user, 
                    isShowDetails: !prevState.user.isShowDetails
                }
            }));

        this.state = {
            user: {
                isShowDetails: false,
                ...props.user
            }
        };

        this.delUser = () => {
            this.setState({ user: null });
        };
    }

    render() {
        const { user } = this.state;

        if (!user) return null;

        return (
            <div className="users">
                <div className="wrapper">
                    <div>
                        {user.id}, {user.name}, {user.username}
                    </div>
                    <div>
                        <button onClick={this.setDetailsState}>
                            {user.isShowDetails ? 'Hide Details' : 'Show Details'}
                        </button> 
                        <button onClick={this.delUser}>
                            Delete
                        </button>
                    </div>
                </div>
                <hr />
                <div className="showDetails">
                    {user.isShowDetails && JSON.stringify(user)}
                </div>    
            </div>
        );
    }
}
