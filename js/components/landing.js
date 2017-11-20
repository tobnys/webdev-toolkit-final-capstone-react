import 'core-js/es6/map';
import 'core-js/es6/set';

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({adapter: new Adapter()});

export default class Landing extends Component {
    render(){
        return(
            <section className="landing-page">
                <header>
                <div className="col-12">
                    <h1>Welcome!</h1>
                </div>
                </header>
                <div className="row">
                    <div className="col-6">
                        <h2>Application description</h2>
                        <hr/>
                        <p>This application was created in order to collect various web development associated tools in one single "easy-to-reach" application. The functions on this page are created from scratch with an attempt from me to try to replicate these great functions that mostly already exists!</p>
                        <p>The more technical part of the application is that you can enter the admin panel and change various properties about the different functions on the page, use the demo account to try it out.</p>
                    </div>
                    <div className="col-6">
                        <h2>Demo</h2>
                        <hr/>
                        <p>In order to log in and use the back-end functionality as an "admin", please press the "login" button above and enter the following information...</p>
                        <p>Username: demo<br/>Password: demo</p>
                    </div>
                </div>
            </section>
        )
    }
}
