const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('activity', {
       id: {
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
       allowNull: false,
       primaryKey: true,
     },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        difficulty:{
          type: DataTypes.STRING
        },
        duration:{
          type: DataTypes.STRING
        },
        season:{
            type: DataTypes.STRING
        },
      },
      {timestamps: false}, // PARA NO AGREGAR  updated_at/created_at
    );
};