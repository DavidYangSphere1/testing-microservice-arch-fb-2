import "dotenv/config";
import { onRequest } from "firebase-functions/v2/https";
import admin from 'firebase-admin';
import express from 'express';

if (!admin.apps.length) admin.initializeApp();

import userRouter from "./routes/users";

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from API Gateway!');
});

app.use('/users', userRouter);

export const api = onRequest(
  {
    timeoutSeconds: 3600,
    memory: "1GiB",
    concurrency: 100,
    cpu: 1
  },
  app
);