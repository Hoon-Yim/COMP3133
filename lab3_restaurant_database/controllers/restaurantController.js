const Restaurant = require("../models/restaurantModel");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllRestaurants = catchAsync(async (req, res, next) => {
    let query = Restaurant.find();
    let success = false;
    let sortBy = "";

    if (req.query.sortBy) {
        if (req.query.sortBy === "ASC") {
            success = true;
            sortBy = "restaurant_id";
        } else if (req.query.sortBy === "DESC") {
            success = true;
            sortBy = "-restaurant_id";
        }
    }

    if (success === true) {
        query = query.sort(sortBy);
        query = query.select("_id restaurant_id cuisine name city");
    }

    const restaurants = await query;

    res.status(200).json({
        status: "success",
        results: restaurants.length,
        data: {
            restaurants
        }
    });
});

exports.createRestaurant = catchAsync(async (req, res, next) => {
    const newRestaurant = await Restaurant.create(req.body);

    res.status(201).json({
        status: "success",
        data: {
            user: newRestaurant
        }
    });
});

exports.getRestaurantsByCuisine = catchAsync(async (req, res, next) => {
    if (!req.params.cuisine) {
        return next(new AppError("No cuisine type has been defined", 404));
    }
    const restaurants = await Restaurant.find({ cuisine: req.params.cuisine });

    res.status(200).json({
        status: "success",
        results: restaurants.length,
        data: {
            restaurants
        }
    });
});

exports.getDelicatessenRestaurants = catchAsync(async (req, res, next) => {
    const restaurants = 
        await Restaurant
            .find({ cuisine: "Delicatessen", "address.city": { $ne: "Brooklyn" }} )
            .select("name cuisine city")
            .sort("name");

    res.status(200).json({
        status: "success",
        results: restaurants.length,
        data: {
            restaurants
        } 
    });
});