import { Request, Response } from "express";
import student from "../services/student";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";


async function createStudentController(req: Request, res: Response) {
    const { name } = req.body;
    const create = await student.createStudent(name);
    return res.json(create);
}

async function readStudentController(req: Request, res: Response) {
    const read = await student.readStudent();
    return res.json(read);
}

async function updateController(req: Request, res: Response) {
    const { _id } = req.params;
    const { name } = req.body;
    try {
        const update = await student.updateStudent(Number(_id), name);
        return res.json(update);
    } catch (error) {
        console.log(error)
        return res.json({ message: "Rota não atualizada." });
    }

}

async function deleteController(req: Request, res: Response) {
    const { _id } = req.params;
    await student.deleteStudent(Number(_id));
    return res.json({ message: "Item deletado." })
}

export default { createStudentController, readStudentController, updateController, deleteController };