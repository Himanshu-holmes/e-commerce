import express from 'express';
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';
import testRouter from './route/user.route';

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(express.json());

  app.use(cookieParser());

  app.use('/api', testRouter)
  app.get('/', (req, res) => {
    res.send('Sambhu Bhai');
  })
  

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});
