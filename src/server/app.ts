import express from 'express';
import routerTasks from '../routes/router.tasks';

const app = express();
app.use(express.json());

app.use(routerTasks);

export default app;