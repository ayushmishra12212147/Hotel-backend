const mongoose = require('mongoose');
const mongoURI="mongodb+srv://ayushmishraofficial1427:AKM@cluster0.qfhxe.mongodb.net/PrakashINN";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

var connection=mongoose.connection

connection.on('error',()=>{
    console.log("Database Not Connected , Connecting failed")
})
connection.on('connected',()=>{
    console.log("Database Connected",mongoose.connection.name)
})
    


module.exports = mongoose;