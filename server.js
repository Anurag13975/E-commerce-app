import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';

dotenv.config();

// connect mongoDB
connectDB();

const app = express();

// middlewares
app.use(express.json()); // to send json data in req,res
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to e-coomerce app project</h1>');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
