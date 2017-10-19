import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store";

import App from "../js/components/app";
import Navigation from '../js/components/navigation';
import Landing from "../js/components/landing";
import Login from "../js/components/login";
import Register from "../js/components/register";
import Generation from "../js/components/generation";
import Category from "../js/components/category";
import CategorySub from "../js/components/categorysub";
import Font from "../js/components/font";
import Dashboard from "../js/components/dashboard";
import Footer from "../js/components/footer";

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('reactNavigation'));
});

/*
document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Navigation />, document.getElementById('reactLanding'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Landing />, document.getElementById('reactLanding'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Login />, document.getElementById('reactLanding'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Register />, document.getElementById('reactRegister'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Generation />, document.getElementById('reactGeneration'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Category />, document.getElementById('reactCategory'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<CategorySub />, document.getElementById('reactCategorySub'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Font />, document.getElementById('reactFont'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Dashboard />, document.getElementById('reactDashboard'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Footer />, document.getElementById('reactFooter'));
});

*/