var express = require("express");

var router = express.Router();

router.get("/", (req, res, next) => {
    res.send("respond with a resource");
});

router.post("/", (req, res, next) => {
    console.log(`First Name: ${req.body.firstname}`);
    console.log(`Last Name: ${req.body.lastname}`);
    res.send("POST received!");
});

module.exports = router;