const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const databseUrl = "";
const collections= [""];
const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));
