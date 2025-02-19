const express = require('express');
const { resolve } = require('path');
const mongoose = require("mongoose");
const {User} = require('./schema');
const {UserModel,ProfileModel,TrackingModel} =require ('./schema');

const app = express();
const port = 2204;

const mongoDB ='mongodb+srv://tadikondasrivardhini9:WeieSVgwhqLu8bd6@cluster0.cmyo4.mongodb.net/mongodb?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoDB);
mongoose.connection.on('error', (err) => {
  console.error(err);
});

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
app.post('/test-create-user', async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.status(201).send('User created successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
