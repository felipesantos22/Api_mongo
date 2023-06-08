import mongoose, { Schema } from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/school');

const schemaTasks = new Schema({
    name: {
        type: String,
    },
},
    {
        timestamps: true,
    }
);

const Tasks = mongoose.model("Tasks",schemaTasks);

export default {
    schemaTasks,
    Tasks
}