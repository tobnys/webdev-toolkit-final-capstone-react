require("isomorphic-fetch");

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



