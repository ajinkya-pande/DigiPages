const express = require('express')
const cors = require('cors')
const createDbConnection = require('./config/db')
createDbConnection();

const app = express()
const port = 5000

app.use(express.json());
app.use(cors({"Access-Control-Allow-Origin":'*'}));

// Routes
app.use('/register',require('./api/routes/register'));
app.use('/login',require('./api/routes/auth'));


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})


