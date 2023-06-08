import mongoose from "mongoose";


const Student = new mongoose.Schema({
    name: {
        type: String,
    },
},
    {
        timestamps: true,
    }
);

export default mongoose.model("Student", Student);

