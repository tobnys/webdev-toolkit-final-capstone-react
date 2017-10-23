import * as actions from "../actions/index";

//console.log(props.user)

const initialState = {
    user: "user"
};

export const webdevReducer = (state=initialState, action) => {
    if (action.type === actions.LOGIN_USER_SUCCESS) {  
        console.log(action.user);
        return Object.assign({}, state, {
            user: action.user.username
        });
    }
    return state;
};

