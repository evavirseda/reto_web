const Phone = require('./../models/phone.model')
const mongoose = require('mongoose')
const dbName = 'phones'
mongoose.connect(`mongodb://localhost/${dbName}`)


// DB connection
require('./../config/db.config')
const data = require('./phones.json')

Phone
.create(data)
.then(res=>{
    console.log(`There are ${res.length}phones`)
    mongoose.connection.close()
})
.catch(err=>console.log(err))
// Seed here!