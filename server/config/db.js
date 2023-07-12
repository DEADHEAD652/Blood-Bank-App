const mongoose = require('mongoose')
const colors = require('colors')
const connectDB = async () =>{
try{
await mongoose.connect(process.env.mongo_url)
console.log(`connected to mongoDB ${mongoose.connection.host}`)
}
catch(e){
console.log(`MongoDB error  ${e}` .bgRed.white)
}



}

module.exports = connectDB