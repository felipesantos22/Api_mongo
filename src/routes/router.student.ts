import express from 'express';
import createStudentController from '../controller/student';

const routerStudent = express.Router();

routerStudent.post('/student', createStudentController);


export default routerStudent;