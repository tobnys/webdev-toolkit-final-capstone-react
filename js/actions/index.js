require("isomorphic-fetch");

export const LOGIN_USER = "LOGIN_USER";
export const loginUser = (username, password) => dispatch => {
  fetch("https://webdev-toolkit.herokuapp.com/api/users/login", {
    method: "POST",
    data: {
      username: username,
      password: password
    }
  })
    .then(res => {
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



