require("isomorphic-fetch");

// LOGIN
export const LOGIN_USER = "LOGIN_USER";
export const loginUser = (username, password) => dispatch => {
  fetch("https://webdev-toolkit.herokuapp.com/api/users/login", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:  JSON.stringify({
      username: username,
      password: password
    })
  })
    .then(res => {
      console.log(res);
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(user => {
      dispatch(loginUserSuccess(user));
    });
};

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const loginUserSuccess = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    user
  }
};

// REGISTER
export const REGISTER_USER = "REGISTER_USER";
export const registerUser = (username, password) => dispatch => {
  fetch("https://webdev-toolkit.herokuapp.com/api/users/register", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:  JSON.stringify({
      username: username,
      password: password
    })
  })
    .then(res => {
      console.log(res);
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(user => {
      dispatch(registerUserSuccess(user));
    });
};

export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const registerUserSuccess = (user) => {
  return {
    type: REGISTER_USER_SUCCESS,
    user
  }
};

// FONTS
export const FETCH_FONT = "FETCH_FONT";
export const fetchFont = (sort) => dispatch => {
  fetch(`https://webdev-toolkit.herokuapp.com/api/functional/fonts/${sort}`, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
    .then(res => {
      console.log(res);
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(fonts => {
      dispatch(fetchFontSuccess(fonts));
    });
};

export const FETCH_FONT_SUCCESS = "FETCH_FONT_SUCCESS";
export const fetchFontSuccess = (fonts) => {
  return {
    type: FETCH_FONT_SUCCESS,
    fonts
  }
};

// CATEGORY
export const SET_CATEGORY = "SET_CATEGORY";
export const setCategory = (target) => dispatch => {
  return {
    type: SET_CATEGORY,
    target
  }
};