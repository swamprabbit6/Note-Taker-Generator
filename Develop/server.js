const express = require('express');
const path = require('path');
const noteData = require('./db/db.json');
const logger = require('./middleware/logger');
const router = require ('./routes/html')
const fs = require ('fs')
const uuid = require('uuid');


const app = express();
const PORT = process.env.PORT || 3001;

//Init middleware
app.use(logger);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(router);

router.get("/notes", (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/notes.html'));
});

//Gets all notes
app.get('/api/notes', (req, res) =>
res.json(noteData));

app.post("/api/notes", (req, res) => {
req.body.id = uuid.v4()
noteData.push(req.body)
fs.writeFile("./db/db.json", JSON.stringify(noteData),() => {
  res.json(req.body)
})
});


app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}`)
);
