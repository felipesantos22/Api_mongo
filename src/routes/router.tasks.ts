import express from 'express';

const routerTasks = express.Router();

routerTasks.get('/tasks', (req,res) => {
    console.log("Mongoose")
});

export default routerTasks;