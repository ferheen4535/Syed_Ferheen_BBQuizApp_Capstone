import { EventEmitter } from 'events';
EventEmitter.defaultMaxListeners = 20;

import { config } from 'dotenv'; config();
import express from 'express';
import cors from 'cors';
import './database/database.js';

import usersRouter from './routes/quiz/usersRouter.js';
import questionsRouter from './routes/quiz/questionsRouter.js';
import resultsRouter from './routes/quiz/resultsRouter.js';

const app = express();
const port = process.env.PORT || 5055;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.use('/quiz/users', usersRouter);
app.use('/quiz/questions', questionsRouter);
app.use('/quiz/results', resultsRouter);
app.use('/quiz/users/:id', usersRouter );

app.get('/', (req, res) => {
  res.send('Welcome to Badmaash Beards Quiz');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
