const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({

    room: {
        type: String,
        required: true,
 
      },
      roomid: {
        type: String,
        required: true,
 

      },
      userid: {
        type: String, 
        required: true,


      },
      fromdate: {
        type: String, 
        required: true,
      },
      todate: {
        type: String, 
        required: true,
      },
      totaldays: {
        type: Number, // Total booking amount
        required: true,
      },
      totalamount: {
        type: Number, // Total booking amount
        required: true,

      },
      transactionid: {
        type: String, // Unique transaction ID for the payment
        required: true,
      },
      status: {
        type: String, // Status of the booking (e.g., 'confirmed', 'cancelled', 'pending')
        default: 'booked',
        required:true
      },

},{
    timestamps:true,
})

module.exports = mongoose.model('Bookings', bookSchema);
