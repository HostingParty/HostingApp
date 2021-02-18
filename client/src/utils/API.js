const axios = require("axios");

exports.login = function (user) {
  return axios.post("/auth/login", user);
};

// User
exports.registerUser = function (user) {
  return axios.post("/api/v1/users", user);
};

exports.getUserInfo = function (id) {
  return axios.get("/api/v1/user/" + id);
};

exports.updateUserInfo = function (id, body) {
  return axios.put("/api/v1/user/" + id, body);
};

exports.updateUserPw = function (id, body) {
  return axios.put("/api/v1/user/pw/" + id, body);
};

exports.deleteUser = function (id) {
  return axios.delete("/api/v1/user/" + id);
};

// Events
exports.addEvent = function (body) {
  return axios.post("/api/v1/events", body);
};

exports.getEventInfo = function (eventId) {
  return axios.get("/api/v1/events/" + eventId);
};

exports.updateEventInfo = function (eventId, body) {
  return axios.put("/api/v1/events/" + eventId, body);
};

exports.deleteEvent = function (eventId) {
  return axios.delete("/api/v1/events/" + eventId);
};
