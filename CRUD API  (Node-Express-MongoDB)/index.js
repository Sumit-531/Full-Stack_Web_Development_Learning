import express from 'express'
import mongoose from 'mongoose';
import productRoute from './route/product.route.js';
import 'dotenv/config'

const app = express();

const port = process.env.PORT;
const uri = process.env.URI;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products",  productRoute);


app.get("/", (req,res)=>{
    res.send("Hello from Node Server API 1.0.0");
})

// Connecting to mongodb
mongoose.connect(uri)
.then(()=>{
    console.log("Connected to the database!");
    app.listen(3000, ()=>{
    console.log(`Server is running on port ${port}`)
})
})
.catch(() =>{
    console.log("Connection failed!");
})

