const getCharById = require("../controllers/getCharById");
// const login = require("../controllers/login");
// const { postFav, deleteFav } = require("../controllers/handleFavorites");
const { postFav } = require("../controllers/postFav");
const { deleteFav } = require("../controllers/deleteFav");
const { postUser } = require("../controllers/postUser");
const { login } = require("../controllers/login");
const router = require("express").Router();

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});

router.post("/login", (req, res) => {
  postUser(req, res);
});
router.get("/login/:email/:password", (req, res) => {
  login(req, res);
  console.log(req.params);
});

router.post("/fav", (req, res) => {
  postFav(req, res);
});

router.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
});

module.exports = router;
