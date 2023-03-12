var bodyParser = require("body-parser");
const express = require("express");
const app = express();

const router = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", router);

app.listen(3000, () => {
    console.log("Server running on Port 3000");
});