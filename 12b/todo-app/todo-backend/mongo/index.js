const mongoose = require('mongoose')
const Todo = require('./models/Todo')
const { MONGO_URL } = require('../util/config')

if (MONGO_URL && !mongoose.connection.readyState) {
  mongoose.connect(MONGO_URL, { useNewUrlParser: true,
     useUnifiedTopology: true,
      writeConcern: { w: 'majority', wtimeout: 1000 } 
  }).then (() => {
    console.log("mongo conn succ")
  })
  .catch(err => {
    console.error("Mongo err", err)
  })
}

module.exports = {
  Todo
}
