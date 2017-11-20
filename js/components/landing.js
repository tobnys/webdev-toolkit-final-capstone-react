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
                    <div className="col-6 pad-bot">
                        <h2>Application description</h2>
                        <hr/>
                        <p>This application was created in order to collect various web development associated tools in one single "easy-to-reach" application.</p>
                        <a id="page-generations" alt="Generate a random text." title="Generate a random text.">
                            <div className="link-container gene" id="page-generations">
                                <i className="fa fa-align-justify" aria-hidden="true"></i>
                                <p>Generate a random text.</p>
                            </div>
                        </a> 
                        <a id="page-categories" alt="Browse cheat sheets." title="Browse cheat sheets.">
                            <div className="link-container cate" id="page-categories">
                            <i className="fa fa-file-o" aria-hidden="true"></i>
                                <p>Browse cheat sheets.</p>
                            </div>
                        </a> 
                        <a id="page-fonts" alt="Browse fonts." title="Browse fonts.">
                            <div className="link-container font" id="page-fonts">
                            <i className="fa fa-font" aria-hidden="true"></i>
                                <p>Browse fonts.</p>
                            </div>
                        </a>
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
