const express = require("express");
const logger = require("morgan");
cosnt mongoose = require("mongoose");
const router = require("");

const PORT = preocess.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

let db = moongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
);