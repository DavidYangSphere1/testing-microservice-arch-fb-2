import "dotenv/config";
import { onRequest } from "firebase-functions/v2/https";
import admin from 'firebase-admin';
import express from 'express';

if (!admin.apps.length) admin.initializeApp();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from ConfigService!');
});

export const config = onRequest(app);