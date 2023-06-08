import Student from '../model/model';

async function createStudent(name: string) {
    const create = await Student.create({
        name,
    });
    return create;
}

export default createStudent;