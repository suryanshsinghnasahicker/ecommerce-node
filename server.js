import express from 'express';
import colors from 'colors'
import dotenv from 'dotenv';
import morgan from 'morgan'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'

//config env 
dotenv.config()


//database config 
connectDB();
//rest object 
const app =express();

//middleware
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1/auth',authRoutes)

//rest api
app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to the home page for ecommerce app`)
})

// port 
const PORT =process.env.PORT||8080;

//run listener
app.listen(PORT,()=>{
    console.log(`server is in ${process.env.DEV_MODE} running on ${PORT}`.bgCyan.white)
})