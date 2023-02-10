const express = require("express");

const app = express();

app.use(express.json());

const userRouter = require("./routes/userRoute");
app.use("/api/users", userRouter);

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server..`, 404));
});
app.use(globalErrorHandler);

module.exports = app;