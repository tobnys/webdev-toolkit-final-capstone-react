import 'core-js/es6/map';
import 'core-js/es6/set';

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({adapter: new Adapter()});

class Generation extends Component {
    render(){
        return(
            <section className="generation-page">
                <header>
                <div className="col-12">
                    <h1>Generation page</h1>
                </div>
                </header>
                <div className="row">
                    <div className="col-6">
                        <div className="input-container">
                            <form name="input-form">
                                <legend>Settings</legend>
                                <label id="num-paragraphs" htmlFor="paragraph">Number of paragraphs (1-5)</label>
                                <input id="num-p-value" type="number" name="paragraph"/>
                            </form>
                        </div>
                        <div className="bottom-button-container">
                            <button id="generate-btn" type="submit">Generate</button>
                        </div>
                        <div className="feedback-container feedback-1">
                            <p>Error!</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="output-container"></div>
                        <div className="bottom-button-container">
                            <button id="copy-btn">Copy</button>
                        </div>
                        <div className="feedback-container feedback-2">
                            <p>Text copied to clipboard!</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

module.exports = Generation;