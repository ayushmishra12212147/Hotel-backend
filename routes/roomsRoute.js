const express = require('express');
const router = express.Router();

const Room = require('../models/rooms'); 

// 1. Get all rooms
router.get('/getallrooms', async (req, res) => {



    try {
      const rooms = await Room.find({});

      return res.send(rooms);
    } catch (error) {
      return res.status(400).json({ message: 'Error fetching rooms', error });
    }
  });


  router.post('/getroombyid', async (req, res) => {
    const roomid=req.body.roomid;

    try {
      const room = await Room.findOne({_id:roomid});

      res.send(room);
    } catch (error) {
      return res.status(400).json({ message: 'Error fetching rooms', error });
    }
  });
  router.post('/add', async (req, res) => {
    try {
      const room = new Room(req.body);
      await room.save();
      res.send("Room Created");
      
    } catch (error) {
      return res.status(400).json({ message: 'Error creating room', error });
      
    }

  })



  module.exports = router;
