import { Request, Response } from "express";
import createStudent from "../services/student";


async function createStudentController(req: Request, res: Response) {
    const { name } = req.body;
    const create = await createStudent(name);
    return res.json(create);
}

export default createStudentController;