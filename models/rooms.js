const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['single', 'double', 'suite'], // Example room types
  },
  pricePerNight: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
  },
  amenities: {
    type: [String], // List of amenities
    default: [],
  },
  capacity: {
    type: Number,
    required: true,
    min: 1, // Minimum capacity should be 1
  },
  images: {
    type: [String], // URLs to room images
    default: [],
  },
  currentbookings:[
    
  ],
  
},{
    timestamps:true,
}
);

module.exports = mongoose.model('room', roomSchema);
