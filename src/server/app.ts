import express from 'express';
import routerStudent from '../routes/router.student';

const app = express();
app.use(express.json());

app.use(routerStudent);

export default app;
