const { User } = require("../dataBase/DB_connection");

const login = async (req, res) => {
  const { email, password } = req.params;
  console.log("estoy en boby back" + email, password);
  try {
    if (!email || !password) return res.status(400).json({ message: "Faltan datos." });

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "Usuario no encontrado." });

    user.password === password ? res.status(200).json({ access: true }) : res.status(403).json({ message: "Contraseña incorrecta." });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  login,
};

//Ejercicio viejo antes de incorporar base de datos
// const users = require("../utils/users");

// const login = (req, res) => {
//   const { email, password } = req.query;
//   const userFound = users.find(
//     (user) => user.email === email && user.password === password
//   );

//   // return userFound
//   // ? res.status(200).json({access: true})
//   // : res.status(404).json({access: false});

//   //    2 formas de hacerlo----------------------
//   if (userFound) {
//     return res.status(200).json({ access: true });
//   }
//   return res.status(200).json({ access: false });
// };

// module.exports = login;
