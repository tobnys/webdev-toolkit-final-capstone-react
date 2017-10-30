import 'core-js/es6/map';
import 'core-js/es6/set';

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({adapter: new Adapter()});

const {connect} = require('react-redux');
const {fetchFont} = require("../actions/index");

export class Font extends Component {
    constructor(props){
        super(props);
    }

    sendFontCall(e) {
        //this.props.dispatch(fetchFont(e.target.id));
    }

    render(){
        return(
            <section className="font-page">
                <header>
                    <div className="col-12">
                        <h1>Font page</h1>
                    </div>
                </header>
                <div className="row">
                    <div className="col-12">
                        <div className="sort-container">
                            <button id="alpha" onClick={this.sendFontCall.bind(this)}>Alpha</button>
                            <button id="date" onClick={this.sendFontCall.bind(this)}>Date</button>
                            <button id="popularity" onClick={this.sendFontCall.bind(this)}>Popularity</button>
                            <button id="trending" onClick={this.sendFontCall.bind(this)}>Trending</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <a href="https://fonts.google.com/" id="card-1" target="_blank">
                            <div className="font-card card-1">
                                <h2>Hello</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum tristique tellus et iaculis. Curabitur quis erat at orci facilisis molestie. Vestibulum porta rutrum nisi ac pharetra.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="https://fonts.google.com/" id="card-2" target="_blank">
                            <div className="font-card card-2">
                                <h2>Header</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum tristique tellus et iaculis. Curabitur quis erat at orci facilisis molestie. Vestibulum porta rutrum nisi ac pharetra.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="https://fonts.google.com/" id="card-3" target="_blank">
                            <div className="font-card card-3">
                                <h2>Header</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum tristique tellus et iaculis. Curabitur quis erat at orci facilisis molestie. Vestibulum porta rutrum nisi ac pharetra.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <a href="https://fonts.google.com/" id="card-4" target="_blank">
                            <div className="font-card card-4">
                                <h2>Header</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum tristique tellus et iaculis. Curabitur quis erat at orci facilisis molestie. Vestibulum porta rutrum nisi ac pharetra.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="https://fonts.google.com/" id="card-5" target="_blank">
                            <div className="font-card card-5">
                                <h2>Header</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum tristique tellus et iaculis. Curabitur quis erat at orci facilisis molestie. Vestibulum porta rutrum nisi ac pharetra.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="https://fonts.google.com/" id="card-6" target="_blank">
                            <div className="font-card card-6">
                                <h2>Header</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum tristique tellus et iaculis. Curabitur quis erat at orci facilisis molestie. Vestibulum porta rutrum nisi ac pharetra.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect()(Font);