import React, {Component} from "react";
import ReactDOM from "react-dom";

const {connect} = require('react-redux');

const {loginUser} = require("../actions/index");

export class Login extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    sendUserInfo(){
        let usernameInput = this.refs.userName.value;
        let passwordInput = this.refs.password.value;

        //console.log(usernameInput);
        //console.log(passwordInput);

        this.props.dispatch(actions.loginUser(usernameInput, passwordInput));
        console.log(this.props);
    }

    render(){
        return(
            <section className="login-page">
                <header>
                <div className="col-12">
                    <h1>Login</h1>
                </div>
                </header>
                <div className="row">
                    <div className="col-12">
                        <form name="login-form">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="login-username" ref="userName"/>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="login-password" ref="password"/>
                            <button id="loginBtn" onClick={this.sendUserInfo.bind(this)}>Login</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect()(Login);