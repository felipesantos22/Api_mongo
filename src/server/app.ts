import express from 'express';
import routerStudent from '../routes/router.student';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://root:password@localhost/schooltest?authSource=admin').then(() => {
    console.log("Conected.")
}).catch(() => {
    console.log("Failed.")
});

app.use(routerStudent);

export default app;

