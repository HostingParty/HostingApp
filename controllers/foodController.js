// // @desc    Get recipe
// // @route   GET /api/v1/food
// // @access  Public
const axios = require('axios')

exports.getRecipes = async (req, res, next) => {
    let dishType = req.params.dishType;
    let recipeUrl = `https://api.edamam.com/search?app_id=${process.env.APP_ID}&q&app_key=${process.env.API_KEY}&dishType=${dishType}`;
  try {
    let data = await axios.get(recipeUrl);
    res.status(200).json({
        success: true,
        results: data.data.hits,
      });
  } catch (error) {
    console.error(error);
  }
}