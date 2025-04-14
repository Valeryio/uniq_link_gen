const path = require("path");
const fileManager = require("../services/fileManager");
let filePath = path.join(__dirname, "../data/notes.json");


const getAllNotes = (req, res) => {
  let allNotes = fileManager.getAllNotesFromJson(filePath);
  res.send(`They are all the notes ${JSON.stringify(allNotes)}`);
}

const getNote = (req, res) => {
  let notesId;

  if (isNaN(req.params.id)) {
    res.send(401);
  } else {
    notesId = parseInt(req.params.id);
    // console.log("The note : ". notesId);
    let specificNote = fileManager.getSpecificNote(filePath, notesId);

    res.send(specificNote);
  }

}

const addNotes = (req, res) => {

  console.log(req.body);
  let allData = fileManager.getAllNotesFromJson(filePath);

  let note = {
    title: req.body.title,
    desc: req.body.desc
  }

  if (!allData) {
    note.id = 0;
  } else {
    note.id = allData.length;
  }

  // console.log(note, filePath);
  fileManager.saveNote(filePath, note);
  res.json(note);
}

const updateNotes = (req, res) => {
  let notesId = 0;

  if (isNaN(req.params.id)) {
    res.send(401);
  } else {
    notesId = parseInt(req.params.id);
    // console.log("The note : ", notesId);
    let allData = fileManager.getAllNotesFromJson(filePath);

    allData[notesId].title = req.body.title;
    allData[notesId].desc = req.body.desc;

    fileManager.updateJsonFile(filePath, allData);
    res.json(200);
  }
}

const deleteNote = (req, res) => {
  let notesId = 0;

  if (isNaN(req.params.id)) {
    res.send(401);
  } else {
    notesId = parseInt(req.params.id);
    // console.log("The note : ", notesId);
    let allData = fileManager.getAllNotesFromJson(filePath);

    // console.log(allData.splice(notesId, 1));
    fileManager.updateJsonFile(filePath, allData);
    res.json(200);
  }
}


module.exports = {getNote, getAllNotes, addNotes, deleteNote, updateNotes};