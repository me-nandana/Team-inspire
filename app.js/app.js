const express = require('express');
const app = express();
app.use(express.json());

let contacts = [];

app.get('/contacts', (req, res) => {
  res.json(contacts);
});

app.post('/contacts', (req, res) => {
  const { name, phone } = req.body;
  contacts.push({ name, phone });
  res.status(201).send('Contact added successfully');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
