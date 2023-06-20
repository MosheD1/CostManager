// Moshe Dego 315044511
// Peleg Vadbeker 209485838
// Eden Blau 208571927
const mongoose = require("mongoose");
const express = require("express");
const addCostRoute = require('./routes/addCost.js');
const getReportRoute = require('./routes/report.js');
const aboutRoute = require('./routes/about.js');

const app = express();
// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://mongo:Aa123456@cluster0.qaa5sqy.mongodb.net/costManager', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(addCostRoute);
app.use(getReportRoute);
app.use(aboutRoute);

app.listen(3000, () => {
    console.log('server is up and running');
});