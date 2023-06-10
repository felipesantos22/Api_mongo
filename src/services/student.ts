import mongoose from 'mongoose';
import Student from '../model/model';
import studentDTO from '../interface/student';

async function createStudent(name: string) {
    const create = await Student.create({
        name,
    });
    return create;
}

async function readStudent() {
    const read = await Student.find();
    return read;
}

async function readStudentId(_id: mongoose.Types.ObjectId) {
    const read = await Student.findById(_id);
    return read;
}

async function updateStudent(_id: mongoose.Types.ObjectId, name: string) {
    const update = await Student.findByIdAndUpdate({
        _id,
        name
    });
    return update;
}

async function deleteStudent(_id: mongoose.Types.ObjectId) {
    const deleteSt = await Student.findByIdAndDelete(_id);
    return deleteSt;
}

export default { createStudent, readStudent, readStudentId, updateStudent, deleteStudent };