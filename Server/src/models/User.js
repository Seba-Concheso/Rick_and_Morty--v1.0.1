const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         // type: DataTypes.UUID,
         // defaultValue: DataTypes.UUIDV4,
         type: DataTypes.STRING,
         primaryKey: true,
         allowNull: false,
         // validate: {  }
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true,
         // validate: {  }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         // validate: {  }
      }

      
   }, { timestamps: false });
};
