require("isomorphic-fetch");

let LOGIN_USER = "LOGIN_USER";
let loginUser = function(username, password) {
    return {
        type: LOGIN_USER,
        username: username,
        password: password
    }
};

exports.LOGIN_USER = LOGIN_USER;
exports.loginUser = loginUser;


