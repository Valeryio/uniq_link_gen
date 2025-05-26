
const router = require("express").Router();
const auth = require("../middleware/auth");
const userControllers = require("../controllers/user.controllers");


// GET /users - find all users
router.get("/", auth.auth, auth.authorizeRoles("admin"), userControllers.getAllUsers);

// GET /users/:id - find a specific user
router.get("/:id", userControllers.getUser);

// POST /users - create a specific user
router.post("/register", userControllers.register);

// POST /users/login - login a specific user
router.post("/login", userControllers.login);

// POST /users/logout - login a specific user
router.post("/logout", userControllers.logout);


// UPDATE /users/:id - update a specific user
router.put("/update/:id", auth.auth, auth.authorizeRoles("admin", "user"), userControllers.updateUser);

// DELETE /users/#:id - delete a specific user
router.delete("/delete/:id", auth.auth, auth.authorizeRoles("admin", "user"), userControllers.removeUser);

module.exports = router;