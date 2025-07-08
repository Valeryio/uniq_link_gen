
const router = require("express").Router();
const auth = require("../middleware/auth");
const cardControllers = require("../controllers/card.controllers");

// This route allow us to get all the card
router.get("/", auth.auth, auth.authorizeRoles("admin"), cardControllers.getAllCards);

// This route allow us to get the informations 
// of one specific card
router.get("/:id", cardControllers.getCard);

// This route allow us to get the informations 
// of one specific card
router.get("/user/:id", auth.auth, cardControllers.getUserCard);

// This route allow us to create a new card
router.post("/add", auth.auth, cardControllers.addCard);

// This route allow us to update a specific card
router.put("/:id", auth.auth, cardControllers.updateCard);


router.delete("/:id", auth.auth, cardControllers.removeCard);


module.exports = router;