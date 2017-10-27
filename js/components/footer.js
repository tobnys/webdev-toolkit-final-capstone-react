import 'core-js/es6/map';
import 'core-js/es6/set';

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({adapter: new Adapter()});

class Footer extends Component {
    render(){
        return(
            <footer>
                <div className="row">
                    <div className="col-12">
                        <div className="icon-group">
                            <a href="https://github.com/tobnys/webdev-toolkit-final-capstone" target="_blank" className="icon"><i className="fa fa-github" aria-hidden="true"></i></a>
                            <a href="https://github.com/tobnys/webdev-toolkit-final-capstone" target="_blank" className="icon"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            <a href="https://github.com/tobnys/webdev-toolkit-final-capstone" target="_blank" className="icon"><i className="fa fa-briefcase" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>&copy; <a href="mailto:tobnystrom@gmail.com">Tobias Nyström</a></p>
                    </div>
                </div>
            </footer>
        )
    }
}

module.exports = Footer;