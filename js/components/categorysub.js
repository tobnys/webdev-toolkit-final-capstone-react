import 'core-js/es6/map';
import 'core-js/es6/set';

import React, {Component} from "react";
import ReactDOM from "react-dom";

const {connect} = require('react-redux');
const {setCategory} = require("../actions/index");

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({adapter: new Adapter()});

export class CategorySub extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <section className="category-sub-page">
                <header>
                    <div className="col-12">
                        <h1 id="c-sub-title">Category sub-page</h1>
                    </div>
                </header>
        
                <div className="row">
                    <div className="col-12">
                        <div className="arrow-container">
                            <i className="fa fa-arrow-left" id="back-arrow" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            <div className="col-6">
                                <h2>Cheat sheet</h2>
                                <hr/>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" id="cHref" target="_blank">Cheat Sheet</a>
                            </div>
                            <div className="col-6">
                                <h2>Official Documentation</h2>
                                <hr/>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" id="mHref" target="_blank">Document</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({ 
    user: state.user
});

export default connect(mapStateToProps)(CategorySub);