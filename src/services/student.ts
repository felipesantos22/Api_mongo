import mongoose from 'mongoose';
import Student from '../model/model';

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

async function updateStudent(_id: number, name: string) {
    const update = await Student.updateOne(
        {
            id: new mongoose.Types.ObjectId(_id),
            name,
        }
    );
    return update;
}

async function deleteStudent(_id: number) {
    const deleteSt = await Student.deleteOne(
        {
            id: new mongoose.Types.ObjectId(_id),
        }
    );
    return deleteSt;
}

export default { createStudent, readStudent, updateStudent, deleteStudent };