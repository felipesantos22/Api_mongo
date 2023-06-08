import express from 'express';
import mongoose from 'mongoose';
import createStudentController from '../controller/student';

const routerStudent = express.Router();

mongoose.connect('mongodb://localhost/schooltest');

routerStudent.get('/student', (req, res) => {
    console.log("Mongoose")
});

routerStudent.post('/student', createStudentController);


export default routerStudent;