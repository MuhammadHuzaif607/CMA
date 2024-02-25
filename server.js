const express = require('express');
const cors = require('cors'); // Import the cors package
require('dotenv').config();
const app = express();
const connectdb = require('./DB/db.js');
const PORT = process.env.PORT || 5050;

// Connecting db
connectdb();
// Initialize Middlewares
app.use(express.json({ extended: false }));

// Use cors middleware to enable CORS
app.use(cors());

app.use('/api/auth', require('./Routes/auth.js'));
app.use('/api/users', require('./Routes/user'));
app.use('/api/contact', require('./Routes/contact'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`CMA listening on port ${PORT} `);
});
