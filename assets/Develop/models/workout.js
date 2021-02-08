const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: { type: Date, default: () => newDate() },
        excervises: [
            {
                type: {
                    type: String,
                },
            }
        ]
    }
)