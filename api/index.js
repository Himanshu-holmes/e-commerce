import express from 'express';
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';
import testRouter from './route/user.route.js';
import authRouter from './route/auth.route.js'

const app = express();
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

 

  


  app.use('/api/auth', authRouter)
  app.get('/', (req, res) => {
    res.send('Sambhu Bhai');
  })
  

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
