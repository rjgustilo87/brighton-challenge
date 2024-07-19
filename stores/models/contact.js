const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Contact = sequelize.define('Contact', {
    contact_id: {
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
    contact_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_last_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Contacts',
    timestamps: false
  });

  return Contact;
};
