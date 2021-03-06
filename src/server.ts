import express from 'express';
import './database';
import router from './routers';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log('Runnig server'));
