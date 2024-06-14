import express, { Application } from 'express';
import cors from 'cors';
import router from './app/routes';
import NotFound from './app/middlwares/NotFound';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(NotFound);

export default app;
