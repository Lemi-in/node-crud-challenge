const express = require('express');
const app = express();
const personRoutes = require('./routers/personRoutes');
const errorHandler = require('./middlewares/errorHandler');
const notFoundHandler = require('./middlewares/notFoundHandler');
const { persons } = require('./models/personModel');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();



app.use(cors());

app.set('db', persons)


app.use(express.json());

// All routes
app.use('/person', personRoutes);

// Middleare to handle non-existing routes
app.use(notFoundHandler);

// Middleare to handle errors 
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`The server running here ${PORT}`);
});


module.exports = app;