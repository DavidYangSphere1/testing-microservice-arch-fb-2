import "dotenv/config";
import { onRequest } from "firebase-functions/v2/https";
import admin from 'firebase-admin';
import express from 'express';

if (!admin.apps.length) admin.initializeApp();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from User Service - 21!');
});

app.get('/pin', (req, res) => {
  res.send('User Pin: 1234!');
});

export const user = onRequest(app);
