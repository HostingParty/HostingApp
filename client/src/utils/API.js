const axios = require("axios");

exports.login = function (user) {
  return axios.post("/auth/login", user);
};

// User
exports.registerUser = function (user) {
  return axios.post("/api/v1/users", user);
};

exports.getUserInfo = function (id) {
  return axios.get("/api/v1/users/" + id);
};

exports.updateUserInfo = function (id, body) {
  return axios.put("/api/v1/users/" + id, body);
};

exports.updateUserPw = function (id, body) {
  return axios.put("/api/v1/users/pw/" + id, body);
};

exports.deleteUser = function (id) {
  return axios.delete("/api/v1/users/" + id);
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

// Food API
exports.getRecipes = function (dishType) {
  return axios.get(`/api/v1/food/recipes/${dishType}`);
};

// exports.addRecipes = function (uri, label, dishType, image, ingredientLines, eventId) {
//   let recipe = {
//     uri,
//     label,
//     dishType,
//     image,
//     ingredientLines,
//     healthLabels
//   };
//   return axios.put("/api/v1/events/recipes" + eventId, recipe);
// };

// exports.deleteRecipes = function (url) {
//   return axios.delete = (`/api/v1/events/recipes/${dishType}`+ eventId);
// };
