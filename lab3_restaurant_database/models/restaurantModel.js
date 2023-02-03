const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
    restaurant_id: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        alias: "id",
        unique: true,
        required: [true, "ID is required"]
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    call: {
        type: String,
        required: [true, "Call number is required"]
    },
    cuisine: [String],
    address: {
        zipcode: {
            type: String,
            required: [true, "ZipCode is required"]
        },
        street: {
            type: String,
            required: [true, "Street is required"]
        },
        city: {
            type: String,
            required: [true, "City is required"]
        },
        province: {
            type: String,
            enum: [
                "Alberta",
                "British Colombia",
                "Manitoba",
                "New Brunswick",
                "Newfoundland",
                "Nova Scotia",
                "Ontario",
                "Prince Edward Island",
                "Quebec",
                "Saskatchewan"
            ],
            required: [true, "Province is required"]
        }
    }
});

module.exports = mongoose.model("Restaurant", restaurantSchema)