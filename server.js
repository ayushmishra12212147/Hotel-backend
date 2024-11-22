const express = require('express'); // Import the Express module
const app = express();
const cors = require('cors');
const dbconfig=require('./db')
const roomsRoute=require('./routes/roomsRoute');
const userRoute=require('./routes/userRoutes');
const bookingRoute=require('./routes/bookingRoutes');
app.use(cors());
app.use(express.json());
app.use('/api/rooms',roomsRoute);
app.use('/api/user',userRoute);
app.use('/api/booking',bookingRoute);

const PORT = process.env.PORT||5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

