# SBA319 - Badmaash Beards Quiz API

A Node.js and Express backend for a personality-style beard product quiz. This application uses Mongoose and MongoDB to store quiz results and questions, supporting full CRUD operations, data seeding, validation, and indexing.


## Features

- Seed database with sample data
- Clear existing data before seeding
- Full CRUD operations for Results and Questions
- Mongoose document validation
- Indexed fields for optimized query performance

---
##CRUD for users:

Method	         Route	              Action

USERS: 
GET 	   http://localhost:5055/quiz/users/      GET ALL USERS
POST       http://localhost:5055/quiz/users/680f7ae29fe2c5f8a9b3060d  CREATE NEW USER
DELETE     http://localhost:5055/quiz/users/680e4fe3365a37054b886b27   DELETE USER


RESULTS:
GET        http://localhost:5055/quiz/results/  	GET ALL USER RESULTS
POST http://localhost:5055/quiz/results/680f82b70ed5ac6cd24d3932 CREATE NEW RESULT
DELETE   http://localhost:5055/quiz/users/680e76e6fd5178d9af974cb6  DELETE RESULT
PUT 	 http://localhost:5055/quiz/results/680bca9082d1f2edec46715c UPDATE RESULTS
  

QUESTIONS:  

GET   http://localhost:5055/quiz/questions   GET ALL USER ANSWERS FROM QUESTIONS
POST  http://localhost:5055/quiz/questions   CREATE NEW QUESTION




# Syed_Ferheen_QuizApp_Capstone
# Syed_Ferheen_QuizApp_Capstone
