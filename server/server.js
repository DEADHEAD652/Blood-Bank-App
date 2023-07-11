const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require('morgan')
const cors = require('cors')
dotenv.config();

const app = express();

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//routes

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Node server running in ${process.env.DEV_MODE} Mode on port ${port}`.bgBlue.white );
});
