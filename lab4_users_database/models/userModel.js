const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    username: {
        type: String,
        minlength: 4,
        required: [true, "username is required"]
    },
    email: {
        type: String,
        validate: [validator.isEmail, "given email is in wrong format"],
        required: [true, "name is required"]
    },
    address: {
        street: {
            type: String,
            required: [true, "street is required"]
        },
        suite: {
            type: String,
            required: [true, "street is required"]
        },
        city: {
            type: String,
            match: /^[a-zA-Z\s]+$/,
            required: [true, "street is required"]
        },
        zipcode: {
            type: String,
            match: /^\d{5}-\d{4}$/,
            required: [true, "street is required"]
        },
        geo: {
            lat: String,
            lng: String
        }
    },
    phone: {
        type: String,
        match: /^\d{1}-\d{3}-\d{3}-\d{4}$/,
        required: [true, "phone is required"]
    },
    website: {
        type: String,
        validate: [validator.isURL, "given website address is invalid"],
        required: [true, "website is required"]
    }
});

module.exports = mongoose.model("User", userSchema);