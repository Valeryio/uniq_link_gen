
const express = require("express");
const router = express.Router();
const notesController = require("../controllers/noteControllers");


// home route : "/"
router.get("/", notesController.getAllNotes);
router.post("/", notesController.addNotes);

// Specific note "/notes/:id"
router.get("/:id", notesController.getNote);
router.put("/:id", notesController.updateNotes);
router.delete("/:id", notesController.deleteNote);
module.exports = router;