import express from 'express';
import dotenv from 'dotenv'

dotenv.config()

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>Welcome to e-coomerce app project</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});