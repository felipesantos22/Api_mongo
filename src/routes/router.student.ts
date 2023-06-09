import express from 'express';
import student from '../controller/student';

const routerStudent = express.Router();

routerStudent.post('/student', student.createStudentController);
routerStudent.get('/student', student.readStudentController);
routerStudent.put('/student/:id', student.updateController);
routerStudent.delete('/student/:id', student.deleteController);

export default routerStudent;