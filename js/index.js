import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from '../js/components/navigation';
import Landing from "../js/components/landing"

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Navigation />, document.getElementById('reactNavigation'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Landing />, document.getElementById('reactLanding'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Login />, document.getElementById('reactLogin'));
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