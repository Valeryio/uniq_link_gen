
const fs = require("fs");

const getAllNotesFromJson = (filePath) => {
  let jsonFile;

  if(fs.existsSync(filePath)) {
    jsonFile = fs.readFileSync(filePath, "utf-8");
    if(jsonFile) {
      jsonFile = JSON.parse(jsonFile);
    } else {
      jsonFile = [];
    }
  } else {
    console.log("Doesn't exists", filePath);
  }

  return jsonFile;
}

const saveNote = (filePath, note) => {
  
  let jsonFile = getAllNotesFromJson(filePath);
  jsonFile.push(note);
  fs.writeFileSync(filePath, JSON.stringify(jsonFile, null, 2))
}

const updateJsonFile = (filePath, notes) => {
  let jsonFile = notes
  // console.log(jsonFile);

  fs.writeFileSync(filePath, JSON.stringify(jsonFile, null, 2))
}

const getSpecificNote = (filePath, notesId) => {

  let allData = getAllNotesFromJson(filePath);
  let specificNote = allData.find((data) => (data.id === notesId));

  return specificNote;
}

module.exports = {saveNote, updateJsonFile, getAllNotesFromJson, getSpecificNote}