import express from 'express';

const app = express();

app.get('/', (_, response) => {
  return response.json({ message: 'Hello Rocket' });
});

app.listen(3333, () => 'Server is running on port: 3333');
