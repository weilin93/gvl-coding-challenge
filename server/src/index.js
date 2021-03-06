const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();
const { connectDB } = require('./models/');

const hostname = '127.0.0.1';
let PORT = process.env.PORT;
if (PORT == null || PORT == '') {
  PORT = 3001;
}

const corsConfig = {
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsConfig)).use(express.json()).use(router);

//one time
(async () => {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`Server listening on http://${hostname}:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
