const Workout = require("../models/workout.js");
const mongoose = require("mongoose");
const express = require("express");
const { db } = require("../models/workout.js");
const router = express.Router();

router.post("/api/workouts", ({ body }, res ) => {
    console.log("PARAMS", body, params);

    
});

router.get("workouts", (req,res) => {
    Workout.find({})
    .limit(7)
    .then((dbWorkout) => {
        res.
    });
})