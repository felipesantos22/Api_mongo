import mongoose from "mongoose";

interface studentDTO {
    _id: mongoose.Types.ObjectId,
    name: string
}

export default studentDTO;