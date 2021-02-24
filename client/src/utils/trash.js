import axios from ""

let recipeSearchArr: [];

function buildRecipeURL() {
    let recipeAPIURL = "https://api.edamam.com/search?"
    let recipeString = localStorage.getItem("recipes")
    let recipeParams = {
        // app_ID: " ",
        // apiKey: " ",
        recipe: recipeString,
    };
    return recipeAPIURL + $.param(recipeParams);
}

$("#recipeSearch").on("click", function () {
    $("#recipeSearch").addClass("is-loading")
    localStorage.setItem("recipe", recipeSearchArr);
    var recipeData = [];
    let recipeAPI = buildRecipeURL();
    $.axios({
        url: recipeAPI,
        method: "GET",
    }).then(function (response) {
        for (i = 0; i < 10; i++) {
            let recipeId = response[i].id;
            let recipeAPI =
                "https://api.edamam.com/search?" +
                recipeId +
                // "app_id={app_ID}&app_key={apikey}}&q=pizza&diet=low-carb&health=peanut-free";
            $.ajax({
                url: recipeAPI,
                method: "GET",
            }).then(function (response) {
                let recipe = {
                    recipeid: recipeId,
                    label: response.label,
                    image: response.image,
                    url: response.url,
                    ingredients: response.ingredients
                };
                recipeData.push(recipe);
                localStorage.setItem("recipe", JSON.stringify(recipeData));
                if (recipeData.length >= 10) {
                    location.href = "results.html";
                }
            });
            }
        });
});
        
