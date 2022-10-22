const User = require('../models/User');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    try {
    let { username, name, email, password } = req.body;
        User.findOne({ "email": email }, (err, users) => {
            if (users == null) {
                const newUser =  new User({username:username,name:name,email:email,password:password});
                newUser.save();
                res.send({ message: "Registered Successfully.",type:"success" });
            }
            else {
                res.send({ message: "User already registered.",type:"error" });
            }
        });

    } catch (error) {
        res.send({ message: "Error Occured from Server.",type:"error" });
    }
});

module.exports = router;
