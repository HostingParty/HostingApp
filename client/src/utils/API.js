const axios = require("axios");

exports.login = function (user) {
  return axios.post("/auth/login", user);
};

exports.getUsers = function () {
  return axios.get("/api/v1/users");
};
