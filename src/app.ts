import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import 'dotenv/config';
import moviesRoutes from 'routes/movies';

const app = express();

// eslint-disable-next-line max-len
const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.hze9xrz.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=${process.env.MONGODB_CLUSTERNAME}`;

app.use(cors());

app.use(moviesRoutes);
//

mongoose
    .connect(connectionString)
    .then(() => {
        app.listen(8080);
    })
    .catch((err) => console.log(err));
