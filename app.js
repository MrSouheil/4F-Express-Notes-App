const express = require("express");
const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies
app.use(express.static('public'));

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});

let notes = [
  // Sample note
  { id: 1, title: "Sample Note", content: "This is a sample note." },
  { id: 2, title: "Sample Note 2", content: "This is another sample note." },
];

//Get Note
app.get("/notes", (req, res) => {
  res.json(notes);
});

//Get details of Note
app.get("/notes/:id", (req, res) => {
  const note = notes.find((n) => n.id === parseInt(req.params.id));
  if (!note) res.status(404).send("Note not found");
  res.json(note);
});

//Create a new Note
app.post("/notes", (req, res) => {
  const note = {
    id: notes.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  notes.push(note);
  res.status(201).send(note);
});

//Update a Note
app.put("/notes/:id", (req, res) => {
  let note = notes.find((n) => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).send("Note not found");

  note.title = req.body.title;
  note.content = req.body.content;
  res.send(note);
});

//Delete a Note
app.delete("/notes/:id", (req, res) => {
  notes = notes.filter((n) => n.id !== parseInt(req.params.id));
  res.status(204).send();
});
