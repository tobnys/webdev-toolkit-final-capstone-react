import 'core-js/es6/map';
import 'core-js/es6/set';

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({adapter: new Adapter()});

const {connect} = require('react-redux');
const {loginUser} = require("../actions/index");

export class Login extends Component {
    constructor(props) {
        super(props);
    }

    sendUserInfo() {
        let usernameInput = this.refs.userName.value;
        let passwordInput = this.refs.password.value;
        this.props.dispatch(loginUser(usernameInput, passwordInput));
    }

    render() {
        return (
            <section className="login-page">
                <header>
                    <div className="col-12">
                        <h1>Hello {this.props.user}</h1>
                    </div>
                </header>
                <div className="row">
                    <div className="col-12">
                        <form name="login-form">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="login-username" ref="userName" />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="login-password" ref="password" />
                            <button id="loginBtn" onClick={this.sendUserInfo.bind(this)}>Login</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}


const mapStateToProps = state => ({ 
    user: state.user
});

export default connect(mapStateToProps)(Login);