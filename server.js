const express = require('express')
const colors = require('colors')
const config = require('config')
const helmet = require('helmet')

const BASE_URL = config.get('baseUrl')

const {
  NODE_ENV_OPTIONS,
  DEFAULT_SERVER_PORT,
  API_BASE_URI,
} = require('./utils/constants')
const Url = require('./models/Url')
const connectToDB = require('./config/db-connect')
const urlRoutes = require('./routes/urls')

// connect to Mongo DB
connectToDB()

const app = express()

// helmet headers middleware
app.use(helmet())

// body parser middleware
app.use(express.json())

// define the routes for different api paths
app.use(`${API_BASE_URI}/`, urlRoutes)

// set up the listening
const PORT = process.env.PORT || DEFAULT_SERVER_PORT
const NODE_ENV = process.env.NODE_ENV || NODE_ENV_OPTIONS.DEV

app.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.green.bold)
)
