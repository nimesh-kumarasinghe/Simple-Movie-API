// routes/movieRoutes.js
const express = require("express");
const router = express.Router();
const movieController = require("../Controller/movieController");

router.get("/movies", movieController.getAllMovies);
router.post("/movies", movieController.createMovie);
router.get("/movies/:id", movieController.getMovieById);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);
router.get("/movies/search", movieController.searchMovies);

module.exports = router;
