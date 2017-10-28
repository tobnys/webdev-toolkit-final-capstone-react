import * as actions from "../actions/index";

//console.log(props.user)

const initialState = {
    user: "user",
    isLoggedin: false,
    fonts: "Font",
    target: "none"
};

export const webdevReducer = (state=initialState, action) => {
    if (action.type === actions.LOGIN_USER_SUCCESS) {  
        console.log(action.user);
        return Object.assign({}, state, {
            user: action.user.username,
            isLoggedin: true
        });
    }

    else if (action.type === actions.REGISTER_USER_SUCCESS) {  
        console.log(`${action.user} has successfully registered.`);
    }

    else if (action.type === actions.FETCH_FONT_SUCCESS) {  
        console.log(`Successfully called fonts from API`);
        return Object.assign({}, state, {
            fonts: action.fonts,
        });
    }

    else if (action.type === actions.SET_CATEGORY) {  
        console.log(`Successfully set a category choice.`);
        return Object.assign({}, state, {
            target: action.target
        });
    }

    return state;
};

