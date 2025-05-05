
const router = require("express").Router();
const cardControllers = require("../controllers/card.controllers");

// This route allow us to get all the users
router.get("/", cardControllers.getAllCards);

// This route allow tus to get the informations 
// of one specific user
router.get("/:id", cardControllers.getCard);

// This route allow us to create a new card
router.post("/add", cardControllers.addCard);

// This route allow us to update a specific user
router.put("/:id", );
router.delete("/:id", );


module.exports = router;