const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("country", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    flag: {
      type: DataTypes.STRING,
      isUrl: true,
      allowNull: false
    },

    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },

    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },

    subregion: {
      type: DataTypes.STRING,
      allowNull: true
    },

    area: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
  {timestamps: false}  // PARA NO AGREGAR updated_at/created_at
  );
};
