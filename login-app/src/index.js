import React from "react";
import ReactDOM from "react-dom";
import './index.css';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        };
    }

    chageHandler = e => {
        this.setState({ id: e.target.value });
    }

    render() {
        return (
            <div className="login-container">
                <h2>Login Vision Web loginc</h2>
                <form>
                    <input type="text" name="id" placeholder="User ID" value={this.state.id} onChange={this.chageHandler}/>
                </form>
            </div>   
        )
    }
}

// ==========================
ReactDOM.render(
    <Login/>,
    document.getElementById('root')
);