const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')
dotenv.config();

//mongodb connection 
connectDB()

const app = express();

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',require('./routes/authRoutes'))

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Node server running in ${process.env.DEV_MODE} Mode on port ${port}`.bgBlue.white );
});
