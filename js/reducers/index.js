const actions = require("../actions/index");

export const webdevReducer = (state, action) => {
    state = state || "Testing";
    if (action.type === actions.LOGIN_USER_SUCCESS) {
        console.log(action.user);
        return action.user;
    }
    return state;
};

