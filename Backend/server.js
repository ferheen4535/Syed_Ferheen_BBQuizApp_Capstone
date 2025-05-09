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
app.use(express.urlencoded())
app.use(express.json())
app.use(cors());

app.use('/quiz/users', usersRouter);
app.use('/quiz/questions', questionsRouter);
app.use('/quiz/results', resultsRouter);

// Routes
app.get('/',(req, res)=>{
    res.send('Welcome to Badmaash Beards Quiz')
})




//I am able to make Create, update, and delete routes in Postman and 
// I see the changes in compass but when I go back the next day to 
// recheck my work, the IDs change and I can't see the changes in postman again//
//I tried to work on fixing it all weekend but not sure why it is happening//

/////////////////////////











// App.listen
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
    });