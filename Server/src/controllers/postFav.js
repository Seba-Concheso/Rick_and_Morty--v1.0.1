const { User } = require("../dataBase/DB_connection");
const Favorite = require("../models/Favorite");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;
  try {
    if (!name || !origin || !status || !image || !species || !gender)
      return res.status(400).json({ message: "Faltan datos." });

    const [fav, created] = await Favorite.findOrCreate({
      where: { name, origin, status, image, species, gender },
    });
    return res.status(200).json(fav);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  postFav,
};
