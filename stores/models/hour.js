const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Hour = sequelize.define('Hour', {
    hours_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    store_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Stores',
        key: 'store_id'
      }
    },
    hours: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seasonal_hours_days: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seasonal_hours: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Hours',
    timestamps: false
  });

  return Hour;
};
