// const express = require("express");
// const router = express.Router();

// // @desc    Get recipe
// // @route   GET /api/v1/food
// // @access  Public
// exports.getRecipes = (req, res) => {
//     console.log("foodController, req is: ", req.url, req.method);
//     let recipeUrl = `app_id=${process.env.APP_ID}&q&app_key=${process.env.API_KEY}&dishType=Starter`;
//     router.get(recipeUrl)
//         .then(recipes => res.json(recipes))
//         .catch(err => res.status(422).end());
//     };

var express = require('express');
var router = express.Router();
var request = require('request');


exports.getRecipes = (req, res) => {
    console.log("foodController, req is: ", req.url, req.method);
    let recipeUrl = `app_id=${process.env.APP_ID}&q&app_key=${process.env.API_KEY}&dishType=Starter`;
    // router.get("/recipes", function(req, res, next) {
    request.get(recipeUrl)
        // .on('response', function (response) {
        //     console.log(response.statusCode) // 200
        //     console.log("RESSSS", response)
        // })
        .then(recipes => res.json(recipes))
        .catch(err => res.status(422).end());
        // .pipe(res.json(response));
};

module.exports = request;
    