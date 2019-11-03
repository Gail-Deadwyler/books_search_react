const router = require("express").Router();
const bookRoutes = require("./books");

//Route for books
router.use("/books", bookRoutes);

module.exports = router;