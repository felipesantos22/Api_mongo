import { Request, Response } from "express";
import student from "../services/student";
import mongoose, { Types } from "mongoose";
import studentDTO from "../interface/student";



async function createStudentController(req: Request, res: Response) {
    const { name } = req.body;
    const create = await student.createStudent(name);
    return res.json(create);
}

async function readStudentController(req: Request, res: Response) {
    const read = await student.readStudent();
    return res.json(read);
}

async function readStudentIdController(req: Request, res: Response) {
    const { _id } = req.params;
    const id = new Types.ObjectId(_id);
    try {
        const read = await student.readStudentId(id);
        console.log(read);
        res.status(200).json(read);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Id não encontrado." });
    }

}

async function updateController(req: Request, res: Response) {
    const { _id } = req.params;    
    const { name } = req.body;
    const id = new Types.ObjectId(_id);
    try {
        const update = await student.updateStudent(id, name);
        console.log(update);
        return res.json(update);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Rota não atualizada." });
    }

}

async function deleteController(req: Request, res: Response) {
    const { _id } = req.params;
    const id = new Types.ObjectId(_id);
    try {
        const studentDelete = await student.deleteStudent(id);
        return res.json(studentDelete)
    } catch (error) {
        return res.json({ message: "Item não deletado." })
    }

}

export default { createStudentController, readStudentController, readStudentIdController, updateController, deleteController };