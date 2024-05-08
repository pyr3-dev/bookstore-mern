import express, { response } from 'express';
import mongoose from 'mongoose';
import { MONGODBURL, PORT } from './config.js';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
// allow all origins default
app.use(cors());
// custom origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeader: ['Content-Type'],
//   })
// );

app.get('/', (req, res) => {
  //   console.log(req);
  return res.status(234).send('WELCOME');
});

app.use('/books', booksRoute);

mongoose
  .connect(MONGODBURL)
  .then(() => {
    console.log('App connected to MONGODB');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
      console.log(`Access using http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
