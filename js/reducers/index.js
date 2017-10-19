const actions = require("../actions/index");

let webdevReducer = function(state, action) {
    state = state || "Testing";
    if(action.type === actions.LOGIN_USER){
        console.log(action.username);
        console.log(action.password);
    }
};

exports.webdevReducer = webdevReducer;