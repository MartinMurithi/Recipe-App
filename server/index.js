require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const { logger } = require("./middlewares/logger");
const recipeModel = require("./models/recipe");

const app = express();
const PORT = process.env.PORT || 8500;

dbConnect();

app.use(logger);
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    try {
        const data = await recipeModel.find({});
        res.status(200).json(data);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
})

mongoose.connection.once('open', () => {
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});

mongoose.connection.on('error', (err) => {
    console.log(err);
})