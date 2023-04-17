// Importing all required files
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const PORT = 5000;
const app = express();

// jason formate
app.use(express.json());

// DataBase Connection for storage
const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://smartds2550:gM3LfrIt5TBVFare@cluster0.hew234j.mongodb.net/RESTfulAPI');
        console.log(`MongoDB connected  successfull : ${conn.connection.host}`);
    }catch(err){
        console.log(`Error In Connecting MongoDB: ${err}`);
        process.exit(1);
    }
};

// url endcoding
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Static files access
app.use(express.static('assets'));

// All routers for handle Api Requests
app.use('/',require('./routers'));
// for production mode
connectDB().then(() => {
    app.listen(PORT, () =>{
        console.log(`Successfull Connected With the Port:${PORT}`);
    });
});