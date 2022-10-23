// Export mongoose
const mongoose = require("mongoose");

//Assign MongoDB connection string to Uri and declare options settings
var uri = "<mongodb connect url>"

// Connect MongoDB Atlas using mongoose connect method
const connectToDatabase = () => {
    mongoose.connect(uri).then(() => {
        console.log("Database connection established!");
    }, err => {{
                console.log("Error connecting Database instance due to:", err);
            }
        })
};

module.exports = connectToDatabase;