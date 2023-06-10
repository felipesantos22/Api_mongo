import express from 'express';
import student from '../controller/student';

const routerStudent = express.Router();

routerStudent.post('/student', student.createStudentController);
routerStudent.get('/student', student.readStudentController);
routerStudent.get('/student/:_id', student.readStudentIdController);
routerStudent.put('/student/:_id', student.updateController);
routerStudent.delete('/student/:_id', student.deleteController);

export default routerStudent;