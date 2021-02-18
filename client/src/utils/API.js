const axios = require("axios");

exports.login = function (user) {
  return axios.post("/auth/login", user);
};

exports.registerUser = function (user) {
  return axios.post("/api/v1/users", user);
};
