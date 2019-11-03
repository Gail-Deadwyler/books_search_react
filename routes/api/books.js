const router = require("express").Router();
const booksController = require("../../controllers/booksControllers");

// Match on "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Match on "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;