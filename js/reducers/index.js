const actions = require("../actions/index");

//console.log(props.user)

const initialState = {
    user: "hello123"
};

export const webdevReducer = (state, action) => {
    if (action.type === actions.LOGIN_USER_SUCCESS) {  
        console.log(action.user);
        return Object.assign({}, state, {
            user: action.user.username
        });
    }
    return state;
};

