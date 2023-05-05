const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
         // validate: {  }
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
         // validate: {  }
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "unknow"),
         allowNull: false,
         // validate: {  }
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false,
         // validate: {  }
      },
      gender: {
         type: DataTypes.ENUM("Female", "Male", "Genderless", "unknow"),
         allowNull: false,
         validate: {  }
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {  }
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {  }
      },
   }, { timestamps: false });
};
