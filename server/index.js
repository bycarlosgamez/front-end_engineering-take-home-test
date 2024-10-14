import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
const PORT = 1969;
const corsOptions = {
  origin: ['http://localhost:5173'],
};

const readData = () => {
  try {
    const data = fs.readFileSync('./db.json');
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Posts Server');
});

app.get('/posts', (req, res) => {
  const data = readData();
  res.json(data.posts);
});

app.get('/posts/:id', (req, res) => {
  const data = readData();
  const id = req.params.id;
  const book = data.posts.find((book) => book.id === id);
  res.json(book);
});

app.listen(PORT, () => {
  console.log(`Server runnign on port: ${PORT}.`);
});
