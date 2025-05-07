
const router = require("express").Router();

const userControllers = require("../controllers/user.controllers");


// GET /users - find all users
router.get("/", userControllers.getAllUsers);

// GET /users/:id - find a specific user
router.get("/:id", userControllers.getUser);

// POST /users - create a specific user
router.post("/register", userControllers.register);

// POST /users/login - login a specific user
router.post("/login", userControllers.login);

// UPDATE /users/:id - update a specific user
router.put("/update/:id", userControllers.updateUser);

// DELETE /users/#:id - delete a specific user
router.delete("/delete/:id", userControllers.removeUser);

module.exports = router;