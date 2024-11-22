const express = require('express');
const router = express.Router();
const moment=require('moment');
const Booking=require('../models/Booking')
const Room2=require('../models/rooms');


router.post('/bookroom', async (req, res) => {
    const {
        room,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays,
    }=req.body

    try {
        const booking1 = new Booking({
            room:room.name,
            roomid:room._id,
            userid,
            fromdate,
            todate,
            
            totalamount,
            totaldays,
            transactionid:'1234'


        })
        const booking2 =await booking1.save()
        
        const temproom= await Room2.findOne({_id:room._id})
        
        temproom.currentbookings.push({bookingid:booking2._id,
            fromdate:booking2.fromdate,
            todate:booking2.todate,
            userid:booking2.userid,
            status:
            'booked',



        })
        await temproom.save()
        console.log(temproom)


        res.send('Room booking successfull')
        
    } catch (error) {
        res.send(error)
        
    }
  });

  router.post('/getbookingsbyuserid', async (req, res) => {
    try {
        const userid=req.body.userid
        const bookings=await Booking.find({userid:userid})
        res.send(bookings)
    }catch{
        res.send('Invalid userid')
    }

  })
  router.get('/book', async (req, res) => {
    try {
        const bookings=await Booking.find()
        res.send(bookings)
    }catch{
        res.send('Invalid userid')
    }

  })


  router.post('/cancel', async (req, res) => {
    try {
        const { bookingid, roomid } = req.body; // Extracting `bookingid` and `roomId`
        console.log(roomid)
    const booking = await Booking.findOne({_id:bookingid});
    booking.status = 'Cancelled';
    const temproom= await Room2.findOne({_id:roomid})
    console.log(temproom)
    // const bookings=room.currentbookings
    // const temp=bookings.filtre(booking =>booking.bookingid.toString()!==bookingid)
    // room.currentbookings=temp
    await booking.save();
    // await room.save()
    res.send("Cancelled Successfully")
        
    } catch (error) {
        console.log(error)
        
    }
    

  })



  module.exports = router;
