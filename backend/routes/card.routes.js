
const router = require("express").Router();
const auth = require("../middleware/auth");
const cardControllers = require("../controllers/card.controllers");

// This route allow us to get all the users
router.get("/", auth.auth, auth.authorizeRoles("admin"), cardControllers.getAllCards);

// This route allow tus to get the informations 
// of one specific user
router.get("/:id", auth.auth, cardControllers.getCard);

// This route allow us to create a new card
router.post("/add", auth.auth, cardControllers.addCard);

// This route allow us to update a specific user
router.put("/:id", auth.auth, cardControllers.updateCard);


router.delete("/:id", auth.auth, cardControllers.removeCard);


module.exports = router;