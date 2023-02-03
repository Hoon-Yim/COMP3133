const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Routers
const restaurantRouter = require("./routes/restaurantRoute");
app.use("/restaurants", restaurantRouter);

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server..`, 404));
});
app.use(globalErrorHandler);

module.exports = app;