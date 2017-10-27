import 'core-js/es6/map';
import 'core-js/es6/set';

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({adapter: new Adapter()});

class CategorySub extends Component {
    render(){
        return(
            <section className="category-sub-page">
                <header>
                    <div className="col-12">
                        <h1>Category sub-page</h1>
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
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">MDN Link</a>
                            </div>
                            <div className="col-6">
                                <h2>MDN Reference</h2>
                                <hr/>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">MDN Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

module.exports = CategorySub;