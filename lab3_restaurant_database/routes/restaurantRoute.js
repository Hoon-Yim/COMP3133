const express = require("express");
const router = express.Router();

const restaurantController = require("../controllers/restaurantController");

router
    .route("/")
    .get(restaurantController.getAllRestaurants)
    .post(restaurantController.createRestaurant);

router.get("/Delicatessen", restaurantController.getDelicatessenRestaurants);
router.get("/cuisine/:cuisine", restaurantController.getRestaurantsByCuisine);

module.exports = router;