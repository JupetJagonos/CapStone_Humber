const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const dotenv = require ('dotenv');
const connectDB = require ('./config/db');

dotenv.config();

//connect to mongo or database
connectDB();

const app = express();

//middlewares

app.use(cors());
//Parse json req bodies

//Routes

//server  or starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})