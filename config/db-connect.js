const colors = require('colors')
const mongoose = require('mongoose')
const config = require('config')

const MONGO_URI = config.get('mongoUri')

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })

    console.log(
      `Mongo Atlas connected: ${conn.connection.host}`.magenta.underline.bold
    )
  } catch (error) {
    console.log(
      `Error while connecting to DB. Reason: \n ${error.message}`.red.bgWhite
        .bold
    )
    process.exit(1)
  }
}

module.exports = connectToDB
