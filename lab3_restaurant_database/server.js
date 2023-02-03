const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });
const mongoose = require("mongoose");

const app = require(`${__dirname}/app`);

// DB connection
const DB = process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD);
mongoose.set('strictQuery', true); // for suppressing the deprecation warning
mongoose.connect(DB).then(() => {
    console.log("DB has been successfully connected");
});

// Server opening + listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}..`);
});