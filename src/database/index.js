const mongoose = require('mongoose')

mongoose.createConnection('mongodb://localhost/lifehopedb', { useNewUrlParser: true })
mongoose.Promise = global.Promise

module.exports = mongoose
