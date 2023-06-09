import mongoose from "mongoose";

mongoose.connect('mongodb://root:password@localhost/schooltest?authSource=admin').then(() => {
    console.log("Conected.")
}).catch(() => {
    console.log("Failed.")
});

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

