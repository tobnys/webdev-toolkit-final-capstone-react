import 'core-js/es6/map';
import 'core-js/es6/set';

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({adapter: new Adapter()});

const {connect} = require('react-redux');
const {registerUser} = require("../actions/index");

export class Register extends Component {
    constructor(props){
        super(props);
    }

    sendUserInfo() {
        let usernameInput = this.refs.userName.value;
        let passwordInput = this.refs.password.value;
        this.props.dispatch(registerUser(usernameInput, passwordInput));
    }

    render(){
        return(
            <section className="register-page">
                <header>
                    <div className="col-12">
                        <h1>Register</h1>
                    </div>
                </header>
                <div className="row">
                    <div className="col-12">
                        <form name="register-form">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="register-username" ref="userName"/>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="register-password" ref="password"/>
                            <button id="register-btn" onClick={this.sendUserInfo.bind(this)}>Register</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}


export default connect()(Register);