const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: { type: Date, default: () => newDate() },
        excercises: [
            {
                type: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                duration: {
                    type: Number,
                },
                weight: Number,
                reps: Number,
                sets: Number,
                distance: Number,
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

WorkoutSchema.virtual("totalDuration").get(function () {
    const duration = this.exercises.reduce((acc, cur) => {
        return acc + cur.duration;
    }, 0);

    return duration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;