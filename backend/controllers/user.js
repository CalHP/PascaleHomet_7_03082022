const dotenv = require("dotenv");
dotenv.config();

const bcrypt = require('bcrypt');
const User = require('../models/user')
const jwt = require('jsonwebtoken');

// Création d'un utilisateur
exports.signup = (req, res, next) => {  
      bcrypt.hash(req.body.password, 10)    
    .then(hash => {
        const user = new User({
          firstname : req.body.firstname,
          name : req.body.name,
          email: req.body.email,
          password: hash,
          role: false
        })
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
      .then(user => {
          if (!user) {
              return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
          }
          bcrypt.compare(req.body.password, user.password)
              .then(valid => {
                  if (!valid) {
                      return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                  }
                  res.status(200).json({
                    message:'Connection réussie',
                      userId: user._id,
                      role:user.role,
                      token: jwt.sign(
                        { userId: user._id, role:user.role },
                          process.env.APP_SECRET,
                        { expiresIn: '24h' }
                      ) 
                  });
              })
              .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};