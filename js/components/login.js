import React, {Component} from "react";
import ReactDOM from "react-dom";

class Login extends Component {
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
                            <label for="username">Username</label>
                            <input type="text" id="login-username"/>
                            <label for="password">Password</label>
                            <input type="password" id="login-password"/>
                            <button id="loginBtn">Login</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

module.exports = Login;