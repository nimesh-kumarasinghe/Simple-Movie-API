// controllers/movieController.js
const Movie = require("../Models/movieModel");

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findOne({ Id: parseInt(req.params.id, 10) });
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).send("Movie not found");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findOneAndUpdate(
      { Id: parseInt(req.params.id, 10) },
      req.body,
      { new: true }
    );
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).send("Movie not found");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findOneAndDelete({
      Id: parseInt(req.params.id, 10),
    });
    if (movie) {
      res.status(204).send();
    } else {
      res.status(404).send("Movie not found");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const searchMovies = async (req, res) => {
  try {
    const query = req.query.q.toLowerCase();
    const movies = await Movie.find({
      $or: [
        { Title: new RegExp(query, "i") },
        { Synopsis: new RegExp(query, "i") },
      ],
    });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  searchMovies,
};
