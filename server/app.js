const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Quiz = require("./data/quiz");
require('dotenv').config();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.mongo).then(() => {
    console.log("working bro");
}).catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.send("kela");
});

app.get('/quiz', async (req, res) => {
    const quiz = await Quiz.find();
    res.json(quiz);
});



app.listen(3000, () => {
    console.log("working");
});