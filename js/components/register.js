import React, {Component} from "react";
import ReactDOM from "react-dom";

class Register extends Component {
    render(){
        return(
            <section class="register-page">
                <header>
                <div className="col-12">
                    <h1>Register</h1>
                </div>
                </header>
                <div className="row">
                    <div className="col-12">
                        <form name="register-form">
                            <label for="username">Username</label>
                            <input type="text" id="register-username"/>
                            <label for="password">Password</label>
                            <input type="password" id="register-password"/>
                            <button id="register-btn">Register</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

module.exports = Register;