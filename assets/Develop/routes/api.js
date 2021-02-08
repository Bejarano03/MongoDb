const Workout = require("../models/workout");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.ports("/api/workouts", ({ body }, res ) => {
    console.log("PARAMS", body, params);

    Workout.findOneAndUpdate(
        { _id: params.id },
        { $push: { exercises: body } },
        { new: true }
    )
    .then((dbWorkout) => {
        res.json()
    })
})