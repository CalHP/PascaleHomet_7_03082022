const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require('path'); //concerne les images
const postRoutes = require('./routes/post'); //pour les routes
const userRoutes = require('./routes/user');

const dotenv = require("dotenv");
dotenv.config();
const MY_BDD = process.env.MONGO_DB;

mongoose.connect(MY_BDD,
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
app.use(bodyParser.json());

app.use('/api/auth', userRoutes);
app.use('/api/post', postRoutes);
app.use('/images', express.static(path.join(__dirname, 'images'))); //pour traiter les images

app.use(helmet());
module.exports = app;