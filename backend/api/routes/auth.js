const User = require('../models/User');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    try {
        let { email, password } = req.body;
            User.findOne({ "email": email }, (err, users) => {
                if (users == null) {
                    res.send({ message: "User not registered.",type:"error" });
                }
                else {
                    if(users.password==password) {
                        res.send({ message: "Login Successfully.",type:"success", user:users });
                    }
                    else {
                        res.send({ message: "Incorrect Password.",type:"error" });
                    }
                }
            });
    
        } catch (error) {
            res.send({ message: "Error Occured from Server.",type:"error" });
        }
});

module.exports = router;

